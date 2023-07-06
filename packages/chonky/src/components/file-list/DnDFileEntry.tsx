import React from 'react';
import { Nullable } from 'tsdef';

import { DndEntryState } from '../../types/file-list.types';
import { FileData } from '../../types/file.types';
import { useDndHoverOpen, useFileEntryDnD } from '../../util/dnd';
import { FileHelper } from '../../util/file-helper';
import { makeLocalChonkyStyles } from '../../util/styles';

export interface DnDFileEntryProps {
  file: Nullable<FileData>;
  children: (dndState: DndEntryState) => React.ReactElement;
}

export const DnDFileEntry = React.memo(({ file, children }: DnDFileEntryProps) => {
  const { drop, drag, dndState } = useFileEntryDnD(file);

  useDndHoverOpen(file, dndState);
  return (
    <div ref={drop} style={{
        height: '100%',
    }}>
      <div ref={FileHelper.isDraggable(file) ? drag : null} style={{
        height: '100%',
    }}>
        {children(dndState)}
      </div>
    </div>
  );
});

export const useStyles =  ({
  fillParent: {
    height: '100%',
  },
});
