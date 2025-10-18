<template>
  <div class="min-h-screen bg-base-200">
    <nav class="navbar bg-base-100 shadow-lg">
      <div class="flex-1">
        <router-link to="/" class="btn btn-ghost text-xl">
          🧬 LungSeq Analyzer
        </router-link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><router-link to="/data-browser">Data Browser</router-link></li>
          <li><router-link to="/variant-calling">Variant Calling</router-link></li>
          <li><router-link to="/cnv-analysis">CNV Analysis</router-link></li>
          <li><router-link to="/visualization">Visualization</router-link></li>
        </ul>
      </div>
    </nav>
    
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// Main app component
</script>
