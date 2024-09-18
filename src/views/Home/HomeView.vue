<script lang="ts" setup>
import { RouterLink } from 'vue-router';

const onSearch = (value: string) => {
    console.log("Pesquisar por:", value);
};
</script>

<template>
    <div class="card-container">
        <a-card :bordered="false" class="custom-card">
            <template #title>
                <h2 class="custom-title">Desafio Neoron</h2>
            </template>
            <a-input-search placeholder="Pesquisar voo" enter-button @search="onSearch" style="margin-bottom: 20px" />
            <p>Voo 1</p>
            <p>Voo 2</p>
            <p>Voo 3 </p>
            <div class="button-group">
                <RouterLink to="/cadastro">
                    <a-button type="primary" block>Cadastrar voo</a-button>
                </RouterLink>

                <RouterLink to="/lista">
                    <a-button type="default" block>Listar todos os voos</a-button>
                </RouterLink>
            </div>
        </a-card>
    </div>
</template>

<style scoped>
.custom-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
}

.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-card {
    width: 400px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}

/* Media query para telas menores */
@media (max-width: 600px) {
    .custom-card {
        width: 300px;
    }
}
</style>
