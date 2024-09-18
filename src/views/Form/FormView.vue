<template>
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="Origem">
            <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="Destino">
            <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="Data do voo">
            <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary">Cadastrar</a-button>
            <RouterLink to="/">
                <a-button style="margin-left: 10px">Cancelar</a-button>
            </RouterLink>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
import { reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
    name: string;
    delivery: boolean;
    type: string[];
    resource: string;
    desc: string;
}
const formState: UnwrapRef<FormState> = reactive({
    name: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});
const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
</script>