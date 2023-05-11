import React from 'react';
import './keyboard.css';

const Keyboard = (props) => (
  <div>
    <div
      className="keyboard-module-keyboard"
      role="group"
      aria-label="Keyboard"
    >
      <div className="keyrow">
        <button type="button" data-key="q" className="thekey">
          q
        </button>
        <button type="button" data-key="w" className="thekey">
          w
        </button>
        <button type="button" data-key="e" className="thekey">
          e
        </button>
        <button type="button" data-key="r" className="thekey">
          r
        </button>
        <button type="button" data-key="t" className="thekey">
          t
        </button>
        <button type="button" data-key="y" className="thekey">
          y
        </button>
        <button type="button" data-key="u" className="thekey">
          u
        </button>
        <button type="button" data-key="i" className="thekey">
          i
        </button>
        <button type="button" data-key="o" className="thekey">
          o
        </button>
        <button type="button" data-key="p" className="thekey">
          p
        </button>
      </div>
      <div className="keyrow">
        <div data-testid="spacer" className="spacer" />
        <button type="button" data-key="a" className="thekey">
          a
        </button>
        <button type="button" data-key="s" className="thekey">
          s
        </button>
        <button type="button" data-key="d" className="thekey">
          d
        </button>
        <button type="button" data-key="f" className="thekey">
          f
        </button>
        <button type="button" data-key="g" className="thekey">
          g
        </button>
        <button type="button" data-key="h" className="thekey">
          h
        </button>
        <button type="button" data-key="j" className="thekey">
          j
        </button>
        <button type="button" data-key="k" className="thekey">
          k
        </button>
        <button type="button" data-key="l" className="thekey">
          l
        </button>
        <div data-testid="spacer" className="spacer" />
      </div>
      <div className="keyrow">
        <button type="button" data-key="↵" className="thekey enterdeletekey">
          enter
        </button>
        <button type="button" data-key="z" className="thekey">
          z
        </button>
        <button type="button" data-key="x" className="thekey">
          x
        </button>
        <button type="button" data-key="c" className="thekey">
          c
        </button>
        <button type="button" data-key="v" className="thekey">
          v
        </button>
        <button type="button" data-key="b" className="thekey">
          b
        </button>
        <button type="button" data-key="n" className="thekey">
          n
        </button>
        <button type="button" data-key="m" className="thekey">
          m
        </button>
        <button
          type="button"
          data-key="←"
          aria-label="backspace"
          className="thekey enterdeletekey"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="game-icon"
            data-testid="icon-backspace"
          >
            <path
              fill="var(--color-tone-1)"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Keyboard;
