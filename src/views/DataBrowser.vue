<template>
  <div class="space-y-6">
    <div class="breadcrumbs text-sm">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>Data Browser</li>
      </ul>
    </div>

    <h1 class="text-4xl font-bold">📊 Data Browser</h1>
    <p class="text-lg">Search and download lung cancer genomic data from TCGA and ICGC</p>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Search Parameters</h2>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Cancer Type</span>
          </label>
          <select class="select select-bordered">
            <option>Non-Small Cell Lung Cancer (NSCLC)</option>
            <option>Small Cell Lung Cancer (SCLC)</option>
            <option>Lung Adenocarcinoma (LUAD)</option>
            <option>Lung Squamous Cell Carcinoma (LUSC)</option>
          </select>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Data Type</span>
          </label>
          <select class="select select-bordered">
            <option>Whole Exome Sequencing (WES)</option>
            <option>Whole Genome Sequencing (WGS)</option>
          </select>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Minimum Coverage</span>
          </label>
          <input type="number" value="30" class="input input-bordered" />
          <label class="label">
            <span class="label-text-alt">Coverage depth (30x recommended)</span>
          </label>
        </div>

        <button class="btn btn-primary">Search TCGA Database</button>
      </div>
    </div>

    <div class="alert alert-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>TCGA integration coming soon! For now, you can upload your own BAM/VCF files.</span>
    </div>
  </div>
</template>

<script setup>
// Data browser logic will go here
</script>
