<template>
  <div class="list-container">
    <a-table :columns="columns" :data-source="dataSource" bordered>
      <template #bodyCell="{ column, text, record }">
        <template v-if="['voo', 'origem', 'destino', 'data'].includes(column.dataIndex)">
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
  </div>
</template>
<script lang="ts" setup>
import { CloseOutlined, EditOutlined } from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash-es';
import { reactive, ref } from 'vue';
import type { UnwrapRef } from 'vue';

const columns = [
  {
    title: 'Voo',
    dataIndex: 'voo',
    width: '20%',
  },
  {
    title: 'Origem',
    dataIndex: 'origem',
    width: '20%',
  },
  {
    title: 'Destino',
    dataIndex: 'destino',
    width: '20%',
  },
  {
    title: 'Data',
    dataIndex: 'data',
    width: '20%',
  },
  {
    title: 'Ação',
    dataIndex: 'acao',
    width: '20%'
  },
];
interface DataItem {
  key: string;
  voo: string;
  origem: string;
  destino: string;
  data: string;
}
const data: DataItem[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i.toString(),
    voo: `Voo ${i}`,
    origem: `João Pessoa - PB`,
    destino: `São Paulo - SP`,
    data: '2001/01/01',
  });
}

const dataSource = ref(data);
const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

const edit = (key: string) => {
  editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
};
const save = (key: string) => {
  Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
  delete editableData[key];
};
const cancel = (key: string) => {
  delete editableData[key];
};
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
