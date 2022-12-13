import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { Modal } from '../components/TablesAdmin/component';

import { useTable } from 'views/Admin/hooks';
import { DBTables } from 'typings';

interface Props {
  title: string;
  columns: GridColDef[];
  dataTable: DBTables[];
  getRowId: (row: any) => string;
  width?: string;
  children?: React.ReactNode;
}

const DataTable = ({
  title,
  columns,
  dataTable,
  getRowId,
  width,
  children,
}: Props) => {
  const { setRowId } = useTable();
  const [pageSize, setPageSize] = useState(5);

  // MODAL STATES

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ----------------------------------------

  return (
    <Box className='z-0 flex h-full w-full flex-col items-center justify-center gap-5'>
      <Typography variant='h3' component='h3' sx={{ textAlign: 'center' }}>
        {title}
      </Typography>

      {children && (
        <>
          <button
            className='items-start bg-secondary-light px-5 py-2 hover:bg-secondary '
            onClick={handleOpen}
          >
            AGREGAR
          </button>

          <Modal isVisible={open} onClose={handleClose}>
            {children}
          </Modal>
        </>
      )}
      <Box className={`h-[26rem] ${width}`}>
        <DataGrid
          className='dark:text-white'
          columns={columns}
          rows={dataTable ?? []}
          getRowId={getRowId}
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          onCellEditCommit={(params) => setRowId(params.id)}
        />
      </Box>
    </Box>
  );
};

export default DataTable;
