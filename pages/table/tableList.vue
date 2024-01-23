<template>
  <div class="q-pa-md">
    <q-table
      title="Hacker News"
      :rows="newsList"
      :columns="columns"
      row-key="title"
      :rows-per-page-options="[5, 10, 20, 50]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface NewsItem {
  title: string
  description: string
  url: string
  comments_count: number
  points: number
  time_ago: string
  author: string
}

interface Column {
  name: string
  required?: boolean
  label: string
  align?: string
  field: (row: NewsItem) => any
  format?: (val: any) => string
  sortable?: boolean
}

const { data: fetchedNewsData } = useFetch<NewsItem[]>(
  'https://api.hnpwa.com/v0/news/1.json'
)
const newsList = ref<NewsItem[]>([])

// Columns for the table
const columns = ref<Column[]>([
  {
    name: 'title',
    required: true,
    label: 'Title',
    align: 'left',
    field: (row: NewsItem) => row.title,
    format: (val: string) => `${val}`,
    sortable: true
  },
  {
    name: 'points',
    align: 'center',
    label: 'Points',
    field: (row: NewsItem) => row.points,
    sortable: true
  },
  {
    name: 'author',
    label: 'Author',
    field: (row: NewsItem) => row.author,
    sortable: true
  },
  {
    name: 'time_ago',
    label: 'Time Ago',
    field: (row: NewsItem) => row.time_ago
  },
  {
    name: 'comments_count',
    label: 'Comments',
    field: (row: NewsItem) => row.comments_count,
    sortable: true
  }
])

onMounted(() => {
  // Update the newsList with the fetched data
  if (fetchedNewsData.value) {
    newsList.value = fetchedNewsData.value
  }
})
</script>
