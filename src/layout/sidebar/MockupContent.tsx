import XIcon from '@duyank/icons/regular/X';
import { LayerId, SerializedLayers } from '@lidojs/design-core';
import { useEditor } from '@lidojs/design-editor';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useAsync } from 'react-use';
import {
  addABodyText,
  addAHeading,
  addASubheading,
} from '../../constant/text-effects';
import { getThumbnail } from '../../utils/thumbnail';
import RocketIcon from '@duyank/icons/regular/RocketLaunch';

interface Text {
  img: string;
  elements: {
    rootId: LayerId;
    layers: SerializedLayers;
  };
}

const MockupContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { actions } = useEditor();

  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        overflowY: 'auto',
        display: 'flex',
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          height: 48,
          borderBottom: '1px solid rgba(57,76,96,.15)',
          padding: '0 20px',
        }}
      >
        <p
          css={{
            lineHeight: '48px',
            fontWeight: 600,
            color: '#181C32',
            flexGrow: 1,
          }}
        >
          Mockup
        </p>
        <div
          css={{
            fontSize: 20,
            flexShrink: 0,
            width: 32,
            height: 32,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={onClose}
        >
          <XIcon />
        </div>
      </div>
      <div
        css={{ flexDirection: 'column', overflowY: 'auto', display: 'flex' }}
      >
        <div
          css={{
            padding: 16,
            display: 'flex',
            gap: 8,
            flexDirection: 'column',
          }}
        >
          <div
            css={{
              fontSize: 14,
              lineHeight: 1,
              padding: '10px',
              fontWeight: 700,
              background: '#EBECF0',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            <a href='http://localhost:5173'>
                Create logo on Mockup
            </a>
          </div>
        </div>
        <div
          css={{
            flexGrow: 1,
            overflowY: 'auto',
            display: 'grid',
            padding: '16px',
            flexDirection: 'column',
          }}
        >
               <p> With our mockup, you can geenrate a logo or pattern of your choice with AI, or import your created design directly.
                <RocketIcon fontSize={20} /></p>
        </div>
      </div>
    </div>
  );
};

export default MockupContent;
