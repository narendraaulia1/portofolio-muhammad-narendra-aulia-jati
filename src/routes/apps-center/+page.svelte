<script lang="js">
	import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-svelte';

	const apps = [
		{
			name: 'QiRi',
			category: 'Tools',
			description: 'Generator QR code simpel dan cepat untuk berbagai kebutuhan tautan.',
			url: 'https://qiri.mnarendraauliajati.my.id'
		},
		{
			name: 'Kue',
			category: 'Money Tracker',
			description: 'Catat pemasukan dan pengeluaran harian dengan cepat dan terstruktur.',
			url: 'https://kue.mnarendraauliajati.my.id'
		},
		{
			name: 'Orbit',
			category: 'Streaming',
			description: 'Platform streaming simpel untuk menikmati konten hiburan favorit kapan saja.',
			url: 'https://orbit.mnarendraauliajati.my.id'
		}
	];
</script>

<main class="apps-page">
	<div class="apps-container">
		<header class="apps-header">
			<a href="/" class="back-link">
				<IconArrowLeft size={18} stroke={2.5} />
				<span>Kembali</span>
			</a>

			<div class="header-text">
				<h1>Apps Center</h1>
				<p>Kumpulan aplikasi dan proyek web milik @nnrrndra.</p>
			</div>
		</header>

		<section class="apps-grid">
			{#each apps as app}
				<a
					href={app.url}
					target="_blank"
					rel="noopener noreferrer"
					class="app-card"
				>
					<div class="app-card-top">
						<span class="app-badge">{app.category}</span>
						<span class="app-arrow" aria-hidden="true">
							<IconArrowUpRight size={19} stroke={2.5} />
						</span>
					</div>

					<div class="app-card-body">
						<h2>{app.name}</h2>
						<p>{app.description}</p>
					</div>
				</a>
			{/each}
		</section>
	</div>
</main>

<style>
	.apps-page {
		min-height: 100dvh;
		padding: 2.75rem 1.25rem 3rem;
		display: flex;
		justify-content: center;
	}

	.apps-container {
		width: 100%;
		max-width: 44rem;
		display: flex;
		flex-direction: column;
		gap: 2.25rem;
	}

	.apps-header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.25rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-family: var(--font-cartoon);
		font-size: 0.95rem;
		font-weight: 700;
		padding: 0.5rem 1rem;
		border-radius: 999px;
		background-color: #ffffff;
		color: var(--ink);
		text-decoration: none;
		border: 3px solid var(--ink);
		box-shadow: 4px 4px 0 var(--ink);
		transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
	}

	.back-link:hover {
		background-color: var(--yellow);
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0 var(--ink);
	}

	.back-link:active {
		transform: translate(3px, 3px);
		box-shadow: 1px 1px 0 var(--ink);
	}

	.header-text h1 {
		margin: 0;
		font-family: var(--font-cartoon);
		font-size: clamp(2rem, 5.5vw, 2.75rem);
		font-weight: 700;
		line-height: 1.15;
		color: #ffffff;
		text-shadow: 3px 3px 0 var(--ink);
		-webkit-text-stroke: 1px var(--ink);
	}

	.header-text p {
		margin: 0.5rem 0 0;
		font-size: 0.95rem;
		font-weight: 700;
		color: #ffffff;
		text-shadow: 1.5px 1.5px 0 var(--ink);
		line-height: 1.5;
	}

	.apps-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.app-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 1.35rem;
		border-radius: 1.25rem;
		background-color: #ffffff;
		color: var(--ink);
		text-decoration: none;
		border: 3px solid var(--ink);
		box-shadow: 6px 6px 0 var(--ink);
		transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
	}

	.app-card:hover {
		transform: translate(-3px, -3px);
		box-shadow: 9px 9px 0 var(--ink);
	}

	.app-card:active {
		transform: translate(4px, 4px);
		box-shadow: 2px 2px 0 var(--ink);
	}

	.app-card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.app-badge {
		font-family: var(--font-cartoon);
		font-size: 0.8rem;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		background-color: var(--yellow);
		color: var(--ink);
		border: 2px solid var(--ink);
	}

	.app-arrow {
		display: grid;
		place-items: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 0.75rem;
		background-color: #f4f4f5;
		color: var(--ink);
		border: 2.5px solid var(--ink);
		transition: background-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
	}

	.app-card:hover .app-arrow {
		background-color: var(--orange);
		color: #ffffff;
		transform: translate(2px, -2px);
	}

	.app-card-body h2 {
		margin: 0 0 0.35rem;
		font-family: var(--font-cartoon);
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--ink);
	}

	.app-card-body p {
		margin: 0;
		font-size: 0.9rem;
		font-weight: 500;
		line-height: 1.5;
		color: #3f3f46;
	}

	@media (max-width: 560px) {
		.apps-page {
			padding: 2rem 1.25rem 2.5rem;
		}

		.apps-grid {
			grid-template-columns: 1fr;
		}
	}
</style>