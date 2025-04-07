<template>
  <div class="py-10">
    <h1 class="text-center mb-8 text-3xl font-bold text-blue-600">Exemplo de Tailwind</h1>

    <div class="container mx-auto px-4">
      <div class="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
        <div class="border-b border-gray-200 px-5 py-4">
          <div class="text-lg font-medium">Componentes com Tailwind</div>
        </div>

        <div class="p-5">
          <p class="mb-4">Esta página demonstra alguns componentes usando apenas Tailwind CSS.</p>

          <div class="space-y-6">
            <div>
              <h3 class="font-medium text-gray-700 mb-2">Botões</h3>
              <div class="flex flex-wrap gap-2">
                <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Default</button>
                <button class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">Primary</button>
                <button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Secondary</button>
                <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Success</button>
                <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Warning</button>
                <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Error</button>
              </div>
            </div>

            <div>
              <h3 class="font-medium text-gray-700 mb-2">Variantes de botões</h3>
              <div class="flex flex-wrap gap-2">
                <button class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">Solid</button>
                <button class="px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50">Outline</button>
                <button class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Soft</button>
                <button class="px-4 py-2 text-indigo-500 hover:bg-indigo-50 rounded">Ghost</button>
                <button class="px-4 py-2 text-indigo-500 hover:underline">Link</button>
              </div>
            </div>

            <div>
              <h3 class="font-medium text-gray-700 mb-2">Badges</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700">Default</span>
                <span class="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700">Primary</span>
                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">Secondary</span>
                <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">Success</span>
                <span class="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">Warning</span>
                <span class="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">Error</span>
              </div>
            </div>

            <div>
              <h3 class="font-medium text-gray-700 mb-2">Alerta</h3>
              <div class="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                <p class="font-bold">Informação importante</p>
                <p>Esta é uma mensagem de alerta de exemplo.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="px-5 py-3 border-t border-gray-200 bg-gray-50 flex justify-end items-center gap-2">
          <button class="px-4 py-2 border border-gray-500 text-gray-500 rounded hover:bg-gray-50">Cancelar</button>
          <button class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">Salvar</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="border-b border-gray-200 px-5 py-4">
          <div class="text-lg font-medium">Componentes de formulário</div>
        </div>

        <div class="p-5 space-y-4">
          <div>
            <label for="input-example" class="block text-sm font-medium text-gray-700 mb-1">Texto de entrada</label>
            <input
              id="input-example"
              type="text"
              placeholder="Digite algo aqui"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
            >
          </div>

          <div>
            <label for="select-example" class="block text-sm font-medium text-gray-700 mb-1">Seleção</label>
            <select
              id="select-example"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
            >
              <option value="" disabled selected>Selecione uma opção</option>
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
            </select>
          </div>

          <div class="flex items-center">
            <input
              id="checkbox-example"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            >
            <label for="checkbox-example" class="ml-2 block text-sm text-gray-700">
              Aceito os termos e condições
            </label>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <a href="/" class="text-indigo-500 hover:underline">
          Voltar para página inicial
        </a>
      </div>
    </div>
  </div>
</template>