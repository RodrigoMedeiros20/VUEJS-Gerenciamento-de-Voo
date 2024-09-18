<template>
  <div class="list-container">
    <a-table :columns="columns" :data-source="dataSource" bordered>
      <template #bodyCell="{ column, text, record }">
        <template v-if="['id', 'cep', 'pais', 'estado'].includes(column.dataIndex)">
          <div>
            <a-input v-if="editableData[record.key]" v-model:value="editableData[record.key][column.dataIndex]"
              style="margin: -5px 0" />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'acao'">
          <div class="editable-row">
            <span v-if="editableData[record.key]">
              <a-typography-link @click="save(record.key)">Save</a-typography-link>
              <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else class="icon-container">
              <a @click="edit(record.key)">
                <EditOutlined style="font-size: 20px;" />
              </a>
              <a @click="edit(record.key)">
                <CloseOutlined style="font-size: 20px;" />
              </a>
            </span>
          </div>
        </template>
      </template>
    </a-table>
    <div style="display: flex; justify-content: center;">
      <RouterLink to="/">
        <a-button>Voltar</a-button>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'; // Ajuste a importação
import api from '../../api/api';

interface DataItem {
  key: string;
  id: string;
  cep: string;
  pais: string;
  estado: string;
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: '25%',
  },
  {
    title: 'CEP',
    dataIndex: 'cep',
    width: '25%',
  },
  {
    title: 'País',
    dataIndex: 'pais',
    width: '25%',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    width: '25%',
  },
  {
    title: 'Ação',
    dataIndex: 'acao',
    width: '25%',
  },
];

const dataSource = ref<DataItem[]>([]);
const editableData: Record<string, DataItem | undefined> = reactive({});

const fetchFlights = async () => {
    try {
        const response = await api.get('/endereco');
        const flights = response.data;
        const formattedFlights = flights.map((flight: any, index: number) => ({
            ...flight,
            key: flight.id || index.toString(),
        }));
        dataSource.value = formattedFlights;
    } catch (error) {
        console.error('Erro ao buscar os voos:', error);
    }
};

const edit = (key: string) => {
  editableData[key] = JSON.parse(JSON.stringify(dataSource.value.find(item => key === item.key)));
};

const save = (key: string) => {
  Object.assign(dataSource.value.find(item => key === item.key), editableData[key]);
  delete editableData[key];
};

const cancel = (key: string) => {
  delete editableData[key];
};

// Buscar os voos quando o componente for montado
onMounted(() => {
    fetchFlights();
});

</script>

<style scoped>
.list-container {
  margin: 50px;
}

.icon-container {
  display: flex;
  justify-content: space-between
}
</style>
