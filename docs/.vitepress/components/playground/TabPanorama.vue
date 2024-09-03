<template>
    <v-row>
        <v-col cols="12">
            <v-file-input label="Panorama image" v-model="file" accept="image/*" :clearable="false">
                <template #prepend>
                    <v-btn variant="tonal">Use demo file</v-btn>
                </template>
            </v-file-input>
        </v-col>

        <v-col cols="12">
            <v-text-field label="Caption" clearable></v-text-field>
        </v-col>
        
        <v-col cols="12">
            <v-textarea label="Description" clearable></v-textarea>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const file = ref<File | null>(null);
</script>
