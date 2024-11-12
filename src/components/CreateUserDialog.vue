<template>
  <q-dialog>
    <div>
      <q-form
        ref="formComponent"
        @submit="emits('create')"
      >
        <q-card>
          <q-card-section class="row">
            <div class="text-h6">
              Create User
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-gutter-y-md">
            <q-input
              v-model="form.name"
              label="Name"
              filled
              lazy-rules
              :rules="[val => !!val || 'Name is required', val => val?.length > 3 || 'Name must be at least 3 characters', val => val?.length < 20 || 'Name must be less than 20 characters']"
            />
            <q-input
              v-model="form.email"
              label="Email"
              filled
              lazy-rules
              :rules="[val => !!val || 'Email is required', val => /.+@.+\..+/.test(val) || 'Invalid email']"
            />
            <q-input
              v-model.number="form.age"
              label="Age"
              filled
              type="number"
              lazy-rules
              :rules="[val => !!val || 'Age is required', val => val >= 18 || 'Age must be at least 18']"
            />
            <q-toggle
              v-model="form.isHuman"
              label="Are you human?"
              color="primary"
            />
            <q-select
              v-model="form.operating_system"
              label="Operating System"
              filled
              :options="getOptions()"
            />
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn
              class="full-width"
              color="primary"
              label="Create"
              type="submit"
              flat
            />
          </q-card-actions>
        </q-card>
        <pre>{{ isValid }}</pre>
      </q-form>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import { QForm } from 'quasar'
import { Ref, ref } from 'vue'

const form = defineModel('form', { type: Object })
const emits = defineEmits(['create'])
const formComponent: Ref<QForm | undefined> = ref()

const isValid = ref(false)

function getOptions () {
  return [
    { label: 'Windows', value: 'windows' },
    { label: 'Mac', value: 'mac' },
    { label: 'Linux', value: 'linux' }
  ]
}
</script>
