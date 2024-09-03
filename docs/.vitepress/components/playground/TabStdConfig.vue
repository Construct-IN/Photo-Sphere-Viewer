<template>
    <v-row>
        <v-col cols="4">
            <v-text-field label="Default yaw"></v-text-field>
        </v-col>
        <v-col cols="4">
            <v-text-field label="Default pitch"></v-text-field>
        </v-col>
        <v-col cols="4"></v-col>

        <v-col cols="4">
            <v-number-input label="Default zoom level" :min="0" :max="100"></v-number-input>
        </v-col>
        <v-col cols="4">
            <v-number-input label="Min FOV" :min="1" :max="179"></v-number-input>
        </v-col>
        <v-col cols="4">
            <v-number-input label="Max FOV" :min="1" :max="179"></v-number-input>
        </v-col>

        <v-col cols="4">
            <v-checkbox label="Fisheye"></v-checkbox>
        </v-col>
        <v-col cols="4">
            <v-checkbox label="Mousewheel"></v-checkbox>
        </v-col>
        <v-col cols="4">
            <v-checkbox label="Hold Ctrl to zoom"></v-checkbox>
        </v-col>
        <v-col cols="4">
            <v-checkbox label="Mousemove"></v-checkbox>
        </v-col>
        <v-col cols="4">
            <v-checkbox label="Two fingers move"></v-checkbox>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">

</script>
