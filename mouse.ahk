SetKeyDelay, 0, 10, Play  ; Note that both 0 and -1 are the same in SendPlay mode.
SetMouseDelay, 10, Play

Start:

MouseMove, 200, 300, 50, R

Sleep, 2000

Send Sincerely,{enter}John Smith

Sleep, 2000

MouseMove, -200, -300, 50, R

Sleep, 2000

Goto, Start


F::
ExitApp