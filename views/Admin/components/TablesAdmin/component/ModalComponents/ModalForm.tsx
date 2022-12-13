import React from 'react'

export const ModalForm = () => {
  
    return (
    <>
    <form className='space-y-6' action='#'>
        <div>
        <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
            ID
        </label>
        <input
            type='number'
            name='ID'
            id='ID'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
            placeholder='ID'
            required
        />
        </div>
        <div>
        <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
            Nombre
        </label>
        <input
            type='text'
            name='Nombre'
            id='Nombre'
            placeholder='Nombre'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
            required
        />
        </div>
        <div className='flex items-start'>
            <div className='flex h-5 items-center'>
                <input
                    id='activa'
                    type='checkbox'
                    value=''
                    className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                    required
                />
            </div>
            <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                Activa 
            </label>
        </div>
    </form>
    </>
  )
}