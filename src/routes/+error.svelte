<script>
	import { page } from '$app/state';
	import { IconArrowLeft, IconAlertTriangle } from '@tabler/icons-svelte';

	const isNotFound = $derived(page.status === 404);
</script>

<main class="error-page">
	<div class="error-card">
		<div class="status-pill" aria-hidden="true">
			<IconAlertTriangle size={17} stroke={2.5} />
			<span>Error {page.status}</span>
		</div>

		<h1>
			{isNotFound ? 'Halaman Tidak Ditemukan' : 'Terjadi Kesalahan'}
		</h1>

		<p class="error-desc">
			{#if isNotFound}
				Tautan yang kamu buka mungkin sudah dipindahkan, dihapus, atau tidak pernah ada.
			{:else}
				{page.error?.message || 'Ada kendala saat memuat halaman ini. Silakan coba beberapa saat lagi.'}
			{/if}
		</p>

		<div class="error-actions">
			<a href="/" class="btn btn-primary">
				<IconArrowLeft size={18} stroke={2.5} />
				<span>Kembali ke Beranda</span>
			</a>

			<a href="/apps-center" class="btn btn-secondary">
				<span>Ke Apps Center</span>
			</a>
		</div>
	</div>
</main>

<style>
	.error-page {
		min-height: 100dvh;
		display: grid;
		place-items: center;
		padding: 2rem 1.25rem;
	}

	.error-card {
		width: 100%;
		max-width: 30rem;
		padding: 2.25rem 1.75rem;
		border-radius: 1.5rem;
		background-color: #ffffff;
		color: var(--ink);
		border: 3px solid var(--ink);
		box-shadow: 8px 8px 0 var(--ink);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.status-pill {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.35rem 0.9rem;
		border-radius: 999px;
		font-family: var(--font-cartoon);
		font-size: 0.9rem;
		font-weight: 700;
		background-color: var(--yellow);
		color: var(--ink);
		border: 2.5px solid var(--ink);
		box-shadow: 3px 3px 0 var(--ink);
		transform: rotate(-2deg);
		margin-bottom: 1.5rem;
	}

	h1 {
		margin: 0 0 0.75rem;
		font-family: var(--font-cartoon);
		font-size: clamp(1.6rem, 5vw, 2.1rem);
		font-weight: 700;
		line-height: 1.2;
		color: var(--ink);
		text-wrap: balance;
	}

	.error-desc {
		margin: 0 0 2rem;
		font-size: 0.95rem;
		font-weight: 500;
		line-height: 1.6;
		color: #3f3f46;
		text-wrap: balance;
	}

	.error-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.85rem;
		width: 100%;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.75rem 1.25rem;
		border-radius: 0.95rem;
		font-family: var(--font-cartoon);
		font-size: 0.95rem;
		font-weight: 700;
		text-decoration: none;
		border: 3px solid var(--ink);
		box-shadow: 4px 4px 0 var(--ink);
		transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
	}

	.btn:hover {
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0 var(--ink);
	}

	.btn:active {
		transform: translate(3px, 3px);
		box-shadow: 1px 1px 0 var(--ink);
	}

	.btn-primary {
		background-color: var(--yellow);
		color: var(--ink);
	}

	.btn-primary:hover {
		background-color: var(--orange);
		color: #ffffff;
	}

	.btn-secondary {
		background-color: #ffffff;
		color: var(--ink);
	}

	.btn-secondary:hover {
		background-color: #f4f4f5;
	}

	@media (max-width: 480px) {
		.error-card {
			padding: 1.75rem 1.25rem;
		}

		.error-actions {
			flex-direction: column;
		}

		.btn {
			width: 100%;
		}
	}
</style>