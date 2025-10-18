<template>
  <div class="space-y-6">
    <div class="breadcrumbs text-sm">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>Visualization</li>
      </ul>
    </div>

    <h1 class="text-4xl font-bold">📊 Data Visualization</h1>
    <p class="text-lg">Generate publication-ready plots and figures</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Available Plots</h2>
          <ul class="menu">
            <li><a>Coverage Plot</a></li>
            <li><a>Variant Manhattan Plot</a></li>
            <li><a>CNV Genome-wide View</a></li>
            <li><a>Oncoprint</a></li>
            <li><a>Mutation Signature</a></li>
          </ul>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Export Options</h2>
          <div class="space-y-2">
            <button class="btn btn-outline btn-block">Export as PNG</button>
            <button class="btn btn-outline btn-block">Export as SVG</button>
            <button class="btn btn-outline btn-block">Export Data (CSV)</button>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Plot Preview</h2>
        <div class="bg-base-200 h-96 rounded-lg flex items-center justify-center">
          <p class="text-base-content/50">Plot will appear here after analysis</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Visualization logic
</script>
