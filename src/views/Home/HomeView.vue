<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import api from '../../api/api'; // Certifique-se de que o caminho para sua API está correto

// Estado para armazenar os voos
const flights = ref<any[]>([]);

// Função para buscar os voos
const fetchFlights = async () => {
    try {
        const response = await api.get('/endereco'); // Substitua '/endereco' pelo endpoint da sua API
        // Ordena os dados pelo campo de data ou ID (presumindo que a API retorne os dados em ordem cronológica inversa)
        const sortedFlights = response.data.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        // Mantém apenas os 3 últimos
        flights.value = sortedFlights.slice(0, 3);
    } catch (error) {
        console.error('Erro ao buscar os voos:', error);
    }
};

// Função para a busca
const onSearch = (value: string) => {
    console.log('Pesquisar por:', value);
};

// Buscar os voos quando o componente for montado
onMounted(() => {
    fetchFlights();
});
</script>

<template>
    <div class="card-container">
        <a-card :bordered="false" class="custom-card">
            <template #title>
                <h2 class="custom-title">Desafio Neoron</h2>
            </template>
            <a-input-search placeholder="Pesquisar voo" enter-button @search="onSearch" style="margin-bottom: 20px" />
            <!-- Exibindo os voos -->
            <div v-if="flights.length > 0">
                <p v-for="flight in flights" :key="flight.id">{{ flight.id }} - {{ flight.endereco }}</p>
            </div>
            <div v-else>
                <p>Nenhum voo encontrado.</p>
            </div>
            <div class="button-group">
                <RouterLink to="/cadastro-endereco">
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
