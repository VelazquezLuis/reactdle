import React from "react";
import "./keyboard.css";

const Keyboard = (props) => {
  return (
    <div>
      <div class="Keyboard-module_keyboard" role="group" aria-label="Keyboard">
        <div class="keyrow">
          <button type="button" data-key="q" class="thekey">
            q
          </button>
          <button type="button" data-key="w" class="thekey">
            w
          </button>
          <button type="button" data-key="e" class="thekey">
            e
          </button>
          <button type="button" data-key="r" class="thekey">
            r
          </button>
          <button type="button" data-key="t" class="thekey">
            t
          </button>
          <button type="button" data-key="y" class="thekey">
            y
          </button>
          <button type="button" data-key="u" class="thekey">
            u
          </button>
          <button type="button" data-key="i" class="thekey">
            i
          </button>
          <button type="button" data-key="o" class="thekey">
            o
          </button>
          <button type="button" data-key="p" class="thekey">
            p
          </button>
        </div>
        <div class="keyrow">
          <div data-testid="spacer" class="spacer"></div>
          <button type="button" data-key="a" class="thekey">
            a
          </button>
          <button type="button" data-key="s" class="thekey">
            s
          </button>
          <button type="button" data-key="d" class="thekey">
            d
          </button>
          <button type="button" data-key="f" class="thekey">
            f
          </button>
          <button type="button" data-key="g" class="thekey">
            g
          </button>
          <button type="button" data-key="h" class="thekey">
            h
          </button>
          <button type="button" data-key="j" class="thekey">
            j
          </button>
          <button type="button" data-key="k" class="thekey">
            k
          </button>
          <button type="button" data-key="l" class="thekey">
            l
          </button>
          <div data-testid="spacer" class="spacer"></div>
        </div>
        <div class="keyrow">
          <button type="button" data-key="↵" class="thekey enterdeletekey">
            enter
          </button>
          <button type="button" data-key="z" class="thekey">
            z
          </button>
          <button type="button" data-key="x" class="thekey">
            x
          </button>
          <button type="button" data-key="c" class="thekey">
            c
          </button>
          <button type="button" data-key="v" class="thekey">
            v
          </button>
          <button type="button" data-key="b" class="thekey">
            b
          </button>
          <button type="button" data-key="n" class="thekey">
            n
          </button>
          <button type="button" data-key="m" class="thekey">
            m
          </button>
          <button
            type="button"
            data-key="←"
            aria-label="backspace"
            class="thekey enterdeletekey"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              class="game-icon"
              data-testid="icon-backspace"
            >
              <path
                fill="var(--color-tone-1)"
                d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
