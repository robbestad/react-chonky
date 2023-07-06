/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

import React from 'react';
import { Nullable } from 'tsdef';

import { FileData } from '../../types/file.types';
import { makeLocalChonkyStyles } from '../../util/styles';
import { useFileNameComponent, useLabelComponent, useModifierIconComponents } from './FileEntry-hooks';

export interface FileEntryNameProps {
  file: Nullable<FileData>;
  className?: string;
  shortenFileName: boolean;
}

export const FileEntryName: React.FC<FileEntryNameProps> = React.memo(({ file, className, shortenFileName }) => {
  const modifierIconComponents = useModifierIconComponents(file);
  const fileNameComponent = useFileNameComponent(file, shortenFileName);
  const labelComponent = useLabelComponent(file);

  const classes = useStyles();
  return (
    <span className={className} title={file ? file.name : undefined}>
      {modifierIconComponents.length > 0 && <span className={classes.modifierIcons}>{modifierIconComponents}</span>}
      {fileNameComponent}
      {labelComponent}
    </span>
  );
});
FileEntryName.displayName = 'FileEntryName';

const useStyles = makeLocalChonkyStyles((theme) => ({
  modifierIcons: {
    color: theme.palette.text.primary,
    position: 'relative',
    fontSize: '0.775em',
    paddingRight: 5,
  },
}));
