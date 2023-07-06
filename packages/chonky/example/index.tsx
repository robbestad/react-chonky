import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { FullFileBrowser } from '../dist/chonky.esm.js';
import { ChonkyIconFA } from '../../chonky-icon-fontawesome';

const App = () => {
  const pathEntries = ['test', 'folder'];
  return (
    <div style={{ height: 400 }}>
      <FullFileBrowser
        iconComponent={ChonkyIconFA}
        folderChain={pathEntries.map((name, idx) => ({
          id: `${idx}`,
          name,
        }))}
        files={[
          { id: 'z<xc', name: 'My File with a very long name and also with a nice preview.txt' },
          { id: 'jre', name: 'My Folder', tags: ['folder'], labels: ['HOT STUFF'] },
        ]}
      />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
