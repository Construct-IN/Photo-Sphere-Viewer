<template>
    <div class="playground-container">
        <v-card class="form">
            <v-tabs v-model="currentTab" bg-color="primary">
                <v-tab value="panorama">Panorama</v-tab>
                <v-tab value="std-config">Standard config</v-tab>
                <v-tab value="adv-config">Advanced config</v-tab>
                <v-tab value="navbar">Navbar config</v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="currentTab">
                    <v-tabs-window-item value="panorama">
                        <TabPanorama></TabPanorama>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="std-config">
                        <TabStdConfig></TabStdConfig>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>

        <div id="viewer"></div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import type { Viewer } from '../../../packages/core';
import TabPanorama from './playground/TabPanorama.vue';
import TabStdConfig from './playground/TabStdConfig.vue';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const currentTab = ref('panorama');

let viewer: Viewer;

onMounted(async () => {
    const { Viewer } = await import('@photo-sphere-viewer/core');

    viewer = new Viewer({
        container: 'viewer',
        loadingImg: baseUrl + 'loader.gif',
    });

    viewer.loader.hide();

    viewer.overlay.show({
        title: 'Please select a panorama file',
        dissmisable: false,
    });
});

onBeforeUnmount(() => {
    viewer?.destroy();
});
</script>

<style lang="scss" scoped>
.playground-container {
    --playground-padding: 32px;

    position: fixed;
    top: var(--vp-nav-height);
    left: 0;
    right: 0;
    bottom: 0;
    padding: var(--playground-padding);
    display: flex;
    background: var(--vp-c-bg);
    z-index: 1;
}

.form {
    flex: none;
    width: 700px;
    margin-right: var(--playground-padding);
}

#viewer {
    flex: 1;
    border-radius: 5px;
    overflow: hidden;
}
</style>
