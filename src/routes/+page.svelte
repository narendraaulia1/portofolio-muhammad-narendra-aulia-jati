<script lang="js">
	import logoApp from '#lib/assets/naren-iconobg.webp';
	import {
		IconBrandInstagram,
		IconBrandTwitter,
		IconBrandTiktok,
		IconCategory2,
		IconArrowRight
	} from '@tabler/icons-svelte';

	const video = {
		youtube_id: 'Xxcwas5izaY',
		title: 'DC Cakung - Surabaya'
	};
</script>

<div class="page-wrapper">
	<main class="beranda">
		<header class="brand-header">
			<div class="logo-badge">
				<img src={logoApp} alt="Logo Narendra" class="logo-naren" />
			</div>

			<div class="identity">
				<span class="handle">@nnrrndra</span>
				<h1 class="name">Muhammad Narendra Aulia Jati</h1>
			</div>

			<nav class="sosmed" aria-label="Sosial Media">
				<a
					href="https://www.instagram.com/nnrrndra/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<IconBrandInstagram size={22} stroke={2.4} />
				</a>
				<a
					href="https://x.com/nnrrndra"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Twitter"
				>
					<IconBrandTwitter size={22} stroke={2.4} />
				</a>
				<a
					href="https://www.tiktok.com/@nnrrndra"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="TikTok"
				>
					<IconBrandTiktok size={22} stroke={2.4} />
				</a>
			</nav>
		</header>

		<section class="content-stack">
			<div class="video-card">
				<iframe
					src={`https://www.youtube-nocookie.com/embed/${video.youtube_id}`}
					title={video.title}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>

			<a href="/apps-center" class="link-button">
				<span class="link-left">
					<span class="link-icon">
						<IconCategory2 size={20} stroke={2.5} />
					</span>
					<span>Apps Center</span>
				</span>
				<IconArrowRight size={20} stroke={2.5} class="link-arrow" />
			</a>
		</section>
	</main>

	<footer class="site-footer">
		<p>© {new Date().getFullYear()} LoekIn. All rights reserved.</p>
	</footer>
</div>

<style>
	.page-wrapper {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2.75rem 1.25rem 1.5rem;
	}

	.beranda {
		width: 100%;
		max-width: 32rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		flex: 1;
	}

	.brand-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
	}

	.logo-badge {
		padding: 0.75rem;
		background-color: #ffffff;
		border: 3px solid var(--ink);
		border-radius: 1.5rem;
		box-shadow: 6px 6px 0 var(--ink);
		transform: rotate(-2deg);
		transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.logo-badge:hover {
		transform: rotate(2deg) scale(1.04);
	}

	.logo-naren {
		width: clamp(5.5rem, 20vw, 7rem);
		height: auto;
		display: block;
	}

	.identity {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.handle {
		font-family: var(--font-cartoon);
		font-size: 0.9rem;
		font-weight: 700;
		padding: 0.25rem 0.85rem;
		border-radius: 999px;
		background-color: var(--yellow);
		color: var(--ink);
		border: 2.5px solid var(--ink);
		box-shadow: 3px 3px 0 var(--ink);
	}

	.name {
		margin: 0;
		font-family: var(--font-cartoon);
		font-size: clamp(1.5rem, 5vw, 2rem);
		font-weight: 700;
		line-height: 1.2;
		color: #ffffff;
		text-shadow: 3px 3px 0 var(--ink);
		-webkit-text-stroke: 1px var(--ink);
		text-wrap: balance;
	}

	.sosmed {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		margin-top: 0.25rem;
	}

	.sosmed a {
		width: 3rem;
		height: 3rem;
		border-radius: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
		color: var(--ink);
		text-decoration: none;
		border: 3px solid var(--ink);
		box-shadow: 4px 4px 0 var(--ink);
		transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
	}

	.sosmed a:hover {
		background-color: var(--yellow);
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0 var(--ink);
	}

	.sosmed a:active {
		transform: translate(3px, 3px);
		box-shadow: 1px 1px 0 var(--ink);
	}

	.content-stack {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.15rem;
	}

	.video-card {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 1.25rem;
		overflow: hidden;
		background-color: var(--ink);
		border: 3px solid var(--ink);
		box-shadow: 6px 6px 0 var(--ink);
	}

	.video-card iframe {
		width: 100%;
		height: 100%;
		border: 0;
		display: block;
	}

	.link-button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.85rem 1.15rem;
		background-color: #ffffff;
		color: var(--ink);
		border-radius: 1.15rem;
		border: 3px solid var(--ink);
		box-shadow: 6px 6px 0 var(--ink);
		text-decoration: none;
		font-family: var(--font-cartoon);
		font-size: 1.1rem;
		font-weight: 700;
		transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
	}

	.link-button:hover {
		background-color: var(--yellow);
		transform: translate(-2px, -2px);
		box-shadow: 8px 8px 0 var(--ink);
	}

	.link-button:active {
		transform: translate(4px, 4px);
		box-shadow: 2px 2px 0 var(--ink);
	}

	.link-left {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
	}

	.link-icon {
		width: 2.35rem;
		height: 2.35rem;
		border-radius: 0.75rem;
		display: grid;
		place-items: center;
		background-color: var(--orange);
		color: #ffffff;
		border: 2.5px solid var(--ink);
	}

	.link-button :global(.link-arrow) {
		transition: transform 0.15s ease;
	}

	.link-button:hover :global(.link-arrow) {
		transform: translateX(4px);
	}

	.site-footer {
		margin-top: 2.5rem;
		font-size: 0.85rem;
		font-weight: 700;
		text-align: center;
		color: #ffffff;
		text-shadow: 1.5px 1.5px 0 var(--ink);
	}

	.site-footer p {
		margin: 0;
	}
</style>