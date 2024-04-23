searchState.loadedDescShard("rustyline", 0, "Readline for Rust\nEscape or Alt modifier\nAlt + Shift\nabort\naccept-line\nEither accepts or inserts a newline\nAfter cursor\nAfter end of word.\nWhere to paste (relative to cursor position)\nWhere to move with respect to word boundary\n⇤ (usually Shift-Tab)\n⌫ or Ctrl-H\nBackward search\nBackward search until\nbackward-char\nbackward-word, vi-prev-word\nBefore cursor\nBefore end of word.\nbeginning-of-buffer\nbeginning-of-history\nbeginning-of-line\nnon-blanks characters\nPaste (on unix platform)\nPaste (on unix platform)\nControl modifier\nCtrl + Alt\nCtrl + Alt + Shift\nCtrl + Shift\ncapitalize-word\nSingle char\ncharacter search\nclear-screen\nCommands\nVi Command/Alternate\ncomplete\ncomplete-backward\ncomplete-hint\nCompletion/suggestion context\nDedent current line\n⌦\n↓ arrow key\ndowncase-word\nLine editor\nalphanumeric characters\n⇲\nend-of-buffer\nvi-eof-maybe\nend-of-history\nend-of-line\n↵ or Ctrl-M\nContains the error value\nEscape or Ctrl-[\nExternal printer\nFunction key\nForward search\nForward search until\nforward-char\nforward-search-history (incremental search)\nforward-word, vi-end-word, vi-next-word\nSyntax specific helper.\nhistory-search-backward (common prefix search)\nhistory-search-forward (common prefix search)\n⇱\nIndent current line\nVi input modes\nInsert text\nInsert/Input mode\nInsert key\nInterrupt signal (Ctrl-C)\nInput key pressed\nInput key pressed and modifiers\nbackward-delete-char, backward-kill-line, …\n← arrow key\nmove to the same column on the next line\nmoves cursor to the line below or switches to next history …\nmove to the same column on the previous line\nmoves cursor to the line above or switches to prev history …\nThe set of modifier keys that were triggered along with a …\nbackward-char, backward-word, beginning-of-line, …\nWhere to move\nNo modifier\nInserts a newline\nnext-history\nNo action\n\\0\nContains the success value\nvi-replace\n⇟\n⇞\nprevious-history\nquoted-insert\nThe number of times one command should be repeated.\nvi-change-to, vi-substitute\nOverwrite mode\nvi-change-char\nThe error type for I/O and Linux Syscalls (Errno)\nreverse-search-history (incremental search)\n→ arrow key\nShift modifier\nself-insert\nStart of word.\nSuspend signal (Ctrl-Z on unix platform)\n⇥ or Ctrl-I\ntranspose-chars\ntranspose-words\nundo\nUnsupported / unexpected\nUnsupported escape sequence (on unix platform)\n↑ arrow key\nupcase-word\nalphanumeric (and ‘_’) characters\ncharacter-search, character-search-backward, vi-char-search\nvi-first-print\nvi-yank-to\nWhole user input (not really a movement but a range)\nWhole current line (not really a movement but a range)\nDifferent word definitions\nyank, vi-put\nyank-pop\nAdd a new entry in the history.\nReturns the set containing all flags.\nConstructor from <code>char</code> with Alt modifier\nAppend new entries in the specified file.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nClear history.\nReturns the complement of this set of flags.\nCompletion API\nCustomize line editor\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nCreate an external printer\nConstructor from <code>char</code> with Ctrl modifier\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nIf output stream is a tty, this function returns its width …\nReturns an empty set of flags.\nContains error type for handling I/O and Errno errors\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nReturn an immutable reference to the helper.\nReturn a mutable reference to the helper.\nSyntax highlighting\nHints (suggestions at the right of the prompt as you type).\nHistory API\nReturn an immutable reference to the history object.\nReturn an immutable reference to the history object.\nThe history index we are currently editing\nReturn a mutable reference to the history object.\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nReturns an iterator over edited lines\nLine buffer with current cursor position\nLoad the history from the specified file.\nConstructor. Visible for testing.\nCreate an editor with the default configuration\nConstructor from <code>char</code> and modifiers\nctrl-a =&gt; ctrl-A (uppercase) shift-A =&gt; A (no SHIFT …\nReturns the complement of this set of flags.\nPrint message to stdout\nThis method will read a line from STDIN and will display a …\nThis function behaves in the exact same manner as <code>readline</code>…\nRemoves the specified flags in-place.\nSave the history in the specified file.\nInserts or removes the specified flags depending on the …\nRegister a callback function to be called for …\nTells if current command should reset kill ring.\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nToggles the specified flags in-place.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nInput validation API (Multi-line editing)\nCreate an editor with a specific configuration.\nWhether this commands accepts input if the cursor not at …\nA completion candidate.\nSpecific completion candidate.\nTo be called for tab-completion.\nDouble quote: <code>&quot;</code>\nA <code>Completer</code> for file and folder names.\nNo quote\nCompletion candidate pair\nKind of quote.\nSingle quote: <code>&#39;</code>\nTakes the currently edited <code>line</code> with the cursor <code>pos</code>ition …\nTakes the currently edited <code>line</code> with the cursor <code>pos</code>ition …\nText to display when listing alternatives.\nText to display when listing alternatives.\nEscape any <code>break_chars</code> in <code>input</code> string with <code>esc_char</code>. For …\nGiven a <code>line</code> and a cursor <code>pos</code>ition, try to find backward …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the longest common prefix among all …\nConstructor\nText to insert in line.\nText to insert in line.\nRemove escape char\nUpdates the edited <code>line</code> with the <code>elected</code> candidate.\nNo filter\nBeep\nShould the editor use stdio\nBeep or flash or nothing\nConfiguration builder\nComplete the next full match (like in Vim by default)\nColorization mode\nTab completion style\nUser preferences\nTrait for component that holds a <code>Config</code>.\nDeactivate highlighting even if platform/terminal is …\nStyle of editing / Standard keymaps\nEmacs keymap\nActivate highlighting if platform/terminal is supported.\nActivate highlighting even if platform is not supported …\nHistory filter\na line will not be added to the history if it matches the …\nComplete till longest match. When more than one match, …\nSilent\nUse terminal-style interaction whenever possible, even if …\nUse stdin / stdout\nVi keymap\nFlash screen (not supported)\nTell if lines are automatically added to the history.\nTell if lines are automatically added to the history.\nWhether to use stdio or not\nWhether to use stdio or not\nBell style: beep, flash or nothing.\nSet bell style: beep, flash or nothing.\nEnable or disable bracketed paste on unix platform\nBuilds a <code>Config</code> with the settings specified so far.\nReturns a <code>Config</code> builder.\nCheck if cursor position is at leftmost before displaying …\nCheck if cursor position is at leftmost before displaying …\nTell if colors should be enabled.\nForces colorization on or off.\nWhen listing completion alternatives, only display one …\nThe number of possible completions that determines when …\nCompletion behaviour.\nSet <code>completion_type</code>.\n<code>Config</code> accessor.\nEmacs or Vi mode\nChoose between Emacs or Vi mode.\nEnable or disable bracketed paste on unix platform\nBracketed paste on unix platform\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nTell if lines which match the previous history entry are …\nTell if lines which match the previous history entry are …\nTell if lines which begin with a space character are saved …\nTell if lines which begin with a space character are saved …\nIndentation size used by indentation commands\nIndentation size\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDuration (milliseconds) Rustyline will wait for a …\nTimeout for ambiguous key sequences in milliseconds. …\nTell the maximum length (i.e. number of entries) for the …\nSet the maximum length for the history.\nReturns a <code>Config</code> builder.\nTell if lines are automatically added to the history.\nWhether to use stdio or not\nSet bell style: beep, flash or nothing.\nCheck if cursor position is at leftmost before displaying …\nForces colorization on or off.\nThe number of possible completions that determines when …\nSet <code>completion_type</code>.\nChoose between Emacs or Vi mode.\nTell if lines which match the previous history entry are …\nTell if lines which begin with a space character are saved …\nIndentation size for indent/dedent commands\nTimeout for ambiguous key sequences in milliseconds.\nSet the maximum length for the history.\nHorizontal space taken by a tab.\nHorizontal space taken by a tab.\nHorizontal space taken by a tab.\nEOF (VEOF / Ctrl-D)\nUnix Error from syscall\nInterrupt signal (VINTR / VQUIT / Ctrl-C)\nI/O Error\nThe error type for Rustyline errors that can arise from …\nError generated on WINDOW_BUFFER_SIZE_EVENT / SIGWINCH …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSyntax highlighter with ANSI color. Rustyline will try to …\nHighlight matching bracket when typed or cursor moved on.\nReturns the argument unchanged.\nTakes the currently edited <code>line</code> with the cursor <code>pos</code>ition …\nTakes the completion <code>candidate</code> and returns the highlighted …\nTells if <code>line</code> needs to be highlighted when a specific char …\nTakes the <code>hint</code> and returns the highlighted version (with …\nTakes the <code>prompt</code> and returns the highlighted version (with …\nCalls <code>U::from(self)</code>.\nConstructor\nA hint returned by Hinter\nSpecific hint type\nHints provider\nAdd suggestion based on previous history entries matching …\nText to insert in line when right arrow is pressed\nText to display when hint is active\nReturns the argument unchanged.\nTakes the currently edited <code>line</code> with the cursor <code>pos</code>ition …\nCalls <code>U::from(self)</code>.\nSearch history forward\nCurrent state of the history.\nHistory iterator.\nSearch history backward\nSearch direction\nHistory search result\nAdd a new entry in the history.\nAppend new entries in the specified file.\nClear history\nhistory entry\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn the history entry at position <code>index</code>, starting from …\nhistory index\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn true if the history has no entry.\nReturn a forward iterator.\nReturn the last history entry (i.e. previous command)\nReturn the number of entries in the history.\nLoad the history from the specified file.\nDefault constructor\nmatch position in <code>entry</code>\nSave the history in the specified file.\nSearch history (start position inclusive [0, len-1]).\nSet the maximum length for the history. This function can …\nAnchored search\nCustomized constructor with:\nCapitalize word\nRepresent the current input (text and cursor position).\nlowercase word\nuppercase word\nWord’s case change\nExtracts a string slice containing the entire buffer.\nDelete the character at the left of the cursor. Basically …\nReturn the content between current cursor position and <code>mvt</code> …\nDelete the character at the right of the cursor without …\nDelete the previous word, maintaining the cursor at the …\nRemove the specified <code>range</code> in the line.\nDelete range specified by <code>cs</code> search.\nKill from the cursor to the end of the current word, or, …\nKill backward from point to the beginning of the buffer.\nKill backward from point to the beginning of the line.\nAlter the next word.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIndent range specified by <code>mvt</code>.\nInsert the character <code>ch</code> at current cursor position and …\nInsert the <code>s</code>tring at the specified position. Return <code>true</code> …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts a buffer into a <code>String</code> without copying or …\nReturns <code>true</code> if this buffer has a length of zero.\nIs cursor at the end of input (whitespaces after cursor is …\nKill range specified by <code>mvt</code>.\nKill the text from point to the end of the buffer.\nKill the text from point to the end of the line.\nReturns the length of this buffer, in bytes.\nMove cursor on the left.\nMove cursor to the end of the buffer.\nMove cursor to the start of the buffer.\nMove cursor to the end of the line.\nMove cursor on the right.\nMove cursor to the start of the line.\nMove cursor to the matching character position. Return <code>true</code>…\nMoves the cursor to the same column in the line above\nMoves the cursor to the same column in the line above\nMoves the cursor to the end of next word.\nMoves the cursor to the beginning of previous word.\nReturns the position of the character just after the …\nCurrent cursor position (byte position)\nReplaces the content between [<code>start</code>..<code>end</code>] with <code>text</code> and …\nSet cursor position (byte position)\nExchange the char before cursor with the character at …\nTranspose two words\nSet line content (<code>buf</code>) and cursor position (<code>pos</code>).\nCreate a new line buffer with the given maximum <code>capacity</code>.\nYank/paste <code>text</code> at current position. Return <code>None</code> when …\nDelete previously yanked text and yank/paste <code>text</code> at …\nIncomplete input\nValidation fails with an optional error message. User must …\nSimple matching bracket validator.\nValidation succeeds with an optional message\nGive access to user input.\nInput validation result\nThis trait provides an extension interface for determining …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns user input.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructor\nTakes the currently edited <code>input</code> and returns a …\nConfigure whether validation is performed while typing or …")