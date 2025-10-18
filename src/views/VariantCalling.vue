<template>
  <div class="space-y-6">
    <div class="breadcrumbs text-sm">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>Variant Calling</li>
      </ul>
    </div>

    <h1 class="text-4xl font-bold">🧬 Variant Calling Pipeline</h1>
    <p class="text-lg">Detect somatic mutations in lung cancer samples</p>

    <div class="steps steps-vertical lg:steps-horizontal">
      <div class="step step-primary">Upload Data</div>
      <div class="step">Configure Pipeline</div>
      <div class="step">Run Analysis</div>
      <div class="step">Review Results</div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Step 1: Upload Files</h2>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Tumor BAM File</span>
          </label>
          <input type="file" class="file-input file-input-bordered" accept=".bam" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Normal BAM File (optional)</span>
          </label>
          <input type="file" class="file-input file-input-bordered" accept=".bam" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Reference Genome</span>
          </label>
          <select class="select select-bordered">
            <option>GRCh38/hg38 (recommended)</option>
            <option>GRCh37/hg19</option>
          </select>
        </div>

        <button class="btn btn-primary" disabled>
          Next: Configure Pipeline
        </button>
      </div>
    </div>

    <div class="alert alert-warning">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
      <span>Pipeline implementation in progress. WASM-based variant calling coming soon!</span>
    </div>
  </div>
</template>

<script setup>
// Variant calling logic
</script>
