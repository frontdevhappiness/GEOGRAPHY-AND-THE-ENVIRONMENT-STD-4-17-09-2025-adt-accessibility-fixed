# TTS Regeneration Record

This record documents the narration regenerated for the revised Geography and the Environment Standard 4 validation corrections on 10 August 2026.

## Selected preset

- Provider: OpenAI Speech API
- Model: `tts-1-hd`
- Voice: `alloy`
- Speed: `0.92`
- Response format: MP3
- Resulting audio profile: MPEG Layer III, 24,000 Hz, mono, 128 kb/s
- Additional voice instructions: none (`tts-1-hd` does not support the `instructions` parameter)
- Word alignment: `whisper-1`, `verbose_json`, word timestamps, English

## Why this preset was selected

The original generation request was not retained in the exported ADT. The strongest local voice evidence is `pg007_im045_alloy.mp3`. A same-text calibration compared that clip with fresh `tts-1` and `tts-1-hd` Alloy output. `tts-1-hd` was closer in pause envelope, dynamics, and spectral shape. Speed `0.92` produced a 4.536-second calibration clip versus 4.560 seconds for the reference, so it was selected to preserve the current child-appropriate pace.

## Applied batch

- 231 text IDs regenerated
- 213 unique utterances generated; identical utterances were reused for matching normal/easy-read IDs
- Files use the suffix `_alloy_tts1hd.mp3`
- Every applied file was checked for codec, sample rate, channel count, bitrate, transcript agreement, monotonic timestamps, and timestamps within the audio duration
- Spoken timestamps were projected onto the reader's exact visible-token order, so expanded pronunciations such as `F D C`, decimal values, scale ratios, and TOC page labels retain synchronized word highlighting
- Original MP3 files were retained; `audios.json` selects the regenerated files

## Pronunciation rules

- `1:50,000` is spoken as “one to fifty thousand”
- `5.5 centimetres` is spoken as “five point five centimetres”
- `2.75 kilometres` is spoken as “two point seven five kilometres”
- `FDC`, `GPS`, and `PDF` are spoken as initials
- TOC Roman numerals are introduced as page numbers, for example `iv` as “Page four”
- Printed step, question, option, and diagram labels are made explicit where punctuation-only input could be skipped

No API credentials or request secrets are stored in this repository.
