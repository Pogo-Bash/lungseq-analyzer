<template>
  <div class="space-y-8 py-8">
    <div class="hero bg-base-100 rounded-lg shadow-xl py-12">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-bold mb-4">🧬 LungSeq Analyzer</h1>
          <p class="text-lg mb-8">
            Clinical-grade genomics analysis for lung cancer in your browser.
            Powered by WebAssembly for blazing-fast, private computation.
          </p>
          <router-link to="/data-browser" class="btn btn-primary btn-lg">
            Get Started →
          </router-link>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
        <div class="card-body">
          <h2 class="card-title">📊 Data Browser</h2>
          <p>Fetch WES/WGS data from TCGA and ICGC</p>
          <div class="card-actions justify-end">
            <router-link to="/data-browser" class="btn btn-sm btn-primary">
              Browse
            </router-link>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
        <div class="card-body">
          <h2 class="card-title">🧬 Variant Calling</h2>
          <p>Detect mutations using GATK/bcftools</p>
          <div class="card-actions justify-end">
            <router-link to="/variant-calling" class="btn btn-sm btn-primary">
              Analyze
            </router-link>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
        <div class="card-body">
          <h2 class="card-title">📈 CNV Analysis</h2>
          <p>Call copy number variations</p>
          <div class="card-actions justify-end">
            <router-link to="/cnv-analysis" class="btn btn-sm btn-primary">
              Detect
            </router-link>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
        <div class="card-body">
          <h2 class="card-title">📊 Visualization</h2>
          <p>Generate publication-ready plots</p>
          <div class="card-actions justify-end">
            <router-link to="/visualization" class="btn btn-sm btn-primary">
              Visualize
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Dashboard component
</script>
