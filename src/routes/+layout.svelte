<script>
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();

	const siteUrl = 'https://mnarendraauliajati.my.id';

	const routeMeta = {
		'/': {
			title: 'Home',
			ogTitle: 'Muhammad Narendra Aulia Jati - Portfolio',
			description:
				'Semua tautan media sosial, video, dan aplikasi web (QiRi, Kue, Orbit) milik Muhammad Narendra Aulia Jati (@nnrrndra) dalam satu tempat.'
		},
		'/apps-center': {
			title: 'Apps Center',
			ogTitle: 'Apps Center - @nnrrndra',
			description:
				'Kumpulan aplikasi web buatan @nnrrndra: QiRi (QR Code Generator), Kue (Money Tracker), dan Orbit (Streaming).'
		}
	};

	const currentMeta = $derived.by(() => {
		if (page.status >= 400) {
			return {
				title: String(page.status),
				ogTitle: `${page.status} - @nnrrndra`,
				description: 'Halaman tidak ditemukan atau terjadi kesalahan.'
			};
		}

		if (routeMeta[page.url.pathname]) {
			return routeMeta[page.url.pathname];
		}

		const slug = page.url.pathname.split('/').filter(Boolean).pop() ?? 'Home';
		const formatted = slug
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (char) => char.toUpperCase());

		return {
			title: formatted,
			ogTitle: `${formatted} - @nnrrndra`,
			description:
				'Semua tautan media sosial, video, dan aplikasi web (QiRi, Kue, Orbit) milik Muhammad Narendra Aulia Jati (@nnrrndra) dalam satu tempat.'
		};
	});

	const pageTitle = $derived(currentMeta.title);
	const fullTitle = $derived(`${pageTitle} - @nnrrndra`);
	const canonicalUrl = $derived(`${siteUrl}${page.url.pathname}`);
	const ogImage = `${siteUrl}/og-image.png`;

	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'Person',
					'@id': `${siteUrl}/#person`,
					name: 'Muhammad Narendra Aulia Jati',
					alternateName: '@nnrrndra',
					url: siteUrl,
					image: ogImage,
					sameAs: [
						'https://www.instagram.com/nnrrndra/',
						'https://x.com/nnrrndra',
						'https://www.tiktok.com/@nnrrndra'
					]
				},
				{
					'@type': 'WebSite',
					'@id': `${siteUrl}/#website`,
					url: siteUrl,
					name: '@nnrrndra — Links & Apps',
					inLanguage: 'id-ID',
					publisher: {
						'@id': `${siteUrl}/#person`
					}
				}
			]
		})
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{fullTitle}</title>
	<meta name="description" content={currentMeta.description} />
	<link rel="canonical" href={canonicalUrl} />
	<meta name="robots" content={page.status >= 400 ? 'noindex, nofollow' : 'index, follow'} />
	<meta name="theme-color" content="#ff671d" />

	<!-- Open Graph -->
	<meta property="og:type" content={page.url.pathname === '/' ? 'profile' : 'website'} />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:site_name" content="@nnrrndra" />
	<meta property="og:title" content={currentMeta.ogTitle} />
	<meta property="og:description" content={currentMeta.description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={currentMeta.ogTitle} />
	<meta name="twitter:description" content={currentMeta.description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">${jsonLd}</` + `script>`}
</svelte:head>

{@render children()}