searchState.loadedDescShard("termcolor", 0, "This crate provides a cross platform abstraction for …\nTry very hard to emit colors. This includes emitting ANSI …\nAlwaysAnsi is like Always, except it never tries to use …\nSatisfies <code>WriteColor</code> using standard ANSI escape sequences.\nTry to use colors, but don’t force the issue. If the …\nWrite colored text to memory.\nWrites colored buffers to stdout or stderr.\nLike <code>StandardStream</code>, but does buffered writing.\nThe set of available colors for the terminal …\nColorChoice represents the color preferences of an end …\nA color specification.\nNever emit colors.\nSatisfies <code>WriteColor</code> but ignores all color options.\nAn error from parsing an invalid color specification.\nSatisfies <code>io::Write</code> and <code>WriteColor</code>, and supports optional …\n<code>StandardStreamLock</code> is a locked reference to a …\nThis trait describes the behavior of writers that support …\nCreate a buffer that uses ANSI escape sequences.\nReturn the underlying data of the buffer as a mutable …\nReturn the underlying data of the buffer.\nGet the background color.\nGet whether this is bold or not.\nCreates a new <code>Buffer</code> with the current color preferences.\nClears this buffer.\nClears this color specification so that it has no …\nGet whether this is dimmed or not.\nGet the foreground color.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn a mutable reference to the inner writer.\nReturn a mutable reference to the inner writer.\nReturn a reference to the inner writer.\nReturn a reference to the inner writer.\nGet whether this is intense or not.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume this buffer and return the underlying raw data.\nConsume this <code>NoColor</code> value and return the inner writer.\nConsume this <code>Ansi</code> value and return the inner writer.\nReturn the string that couldn’t be parsed as a valid …\nReturns true if and only if this buffer is empty.\nReturns true if this color specification has no colors or …\nReturns true if and only if the underlying writer must …\nGet whether this is italic or not.\nReturns the length of this buffer in bytes.\nLock the underlying writer.\nCreate a new writer that satisfies <code>WriteColor</code> but drops …\nCreate a new writer that satisfies <code>WriteColor</code> using …\nCreate a new color specification that has no colors or …\nCreate a buffer that drops all color information.\nPrints the contents of the given buffer.\nReset the current color settings to their original …\nGet whether reset is enabled or not.\nIf set, the separator given is printed between buffers. By …\nSet the background color.\nSet whether the text is bolded or not.\nSet the color settings of the writer.\nSet whether the text is dimmed or not.\nSet the foreground color.\nSet whether the text is intense or not.\nSet whether the text is italicized or not.\nSet whether to reset the terminal whenever color settings …\nSet whether the text is underlined or not.\nCreate a new <code>StandardStream</code> with the given color …\nCreate a new <code>BufferedStandardStream</code> with the given color …\nCreate a new <code>BufferWriter</code> that writes to stderr with the …\nCreate a new <code>StandardStream</code> with the given color …\nCreate a new <code>BufferedStandardStream</code> with the given color …\nCreate a new <code>BufferWriter</code> that writes to stdout with the …\nReturns true if and only if the underlying writer supports …\nGet whether this is underline or not.")