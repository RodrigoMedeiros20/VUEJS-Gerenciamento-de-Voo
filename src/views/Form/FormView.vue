<template>
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" @submit.prevent="submitForm">
        <a-form-item label="CEP">
            <a-input v-model:value="formState.cep" />
        </a-form-item>
        <a-form-item label="País">
            <a-input v-model:value="formState.pais" />
        </a-form-item>
        <a-form-item label="Cidade">
            <a-input v-model:value="formState.cidade" />
        </a-form-item>
        <a-form-item label="Estado">
            <a-input v-model:value="formState.estado" />
        </a-form-item>
        <a-form-item label="Data do voo">
            <a-date-picker v-model:value="formState.dataVoo" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="submit">Cadastrar</a-button>
            <RouterLink to="/">
                <a-button style="margin-left: 10px">Cancelar</a-button>
            </RouterLink>
        </a-form-item>
    </a-form>
</template>

<script lang="ts" setup>
import { reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';
import api from '../../api/api';
import { useRouter } from 'vue-router';

interface FormState {
    pais: string;
    cidade: string;
    estado: string;
    dataVoo: string;
    cep: string;
}

const formState: UnwrapRef<FormState> = reactive({
    pais: '',
    cidade: '',
    estado: '',
    dataVoo: '',
    cep: '',
});

const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
const router = useRouter();

const submitForm = async () => {
    try {
        const response = await api.post('/endereco', toRaw(formState)); // Usa a instância da API
        console.log('Voo cadastrado com sucesso:', response.data);
        router.push('/'); // Redirecionar após sucesso
    } catch (error) {
        console.error('Erro ao cadastrar voo:', error);
    }
};
</script>
