<template>
  <div class="space-y-6">
    <div class="breadcrumbs text-sm">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>CNV Analysis</li>
      </ul>
    </div>

    <h1 class="text-4xl font-bold">📈 Copy Number Variation Analysis</h1>
    <p class="text-lg">Detect gene amplifications and deletions in cancer genomes</p>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Upload Sequencing Data</h2>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Tumor BAM File</span>
          </label>
          <input type="file" class="file-input file-input-bordered" accept=".bam" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Analysis Window Size</span>
          </label>
          <input type="number" value="10000" class="input input-bordered" />
          <label class="label">
            <span class="label-text-alt">Bin size in base pairs (10kb recommended)</span>
          </label>
        </div>

        <button class="btn btn-primary" disabled>
          Run CNV Detection
        </button>
      </div>
    </div>

    <div class="alert alert-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>CNV detection algorithm in development. Uses read depth analysis.</span>
    </div>
  </div>
</template>

<script setup>
// CNV analysis logic
</script>
