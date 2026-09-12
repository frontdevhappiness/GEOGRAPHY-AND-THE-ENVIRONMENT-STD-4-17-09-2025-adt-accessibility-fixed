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

## Shortfall follow-up — 7 September 2026

Reader pages 25 (`pg022_sec001.html`) and 112 (`pg088_sec001.html`) now place Roman numerals inside Column A. Their narration preserves the original recorded voices. Only the obsolete explanation of three columns and a separate Number column was removed, with cuts placed in existing sentence pauses:

- `pg022_n0072_original_voice_two_columns.mp3`: derived from `pg022_n0072.mp3`; removed seconds 3.52–13.20.
- `pg089_n0073_original_voice_two_columns.mp3`: derived from `pg089_n0073_alloy_gpt4omini_tanzanian_table_v2.mp3`; removed seconds 4.72–13.39.

The remaining narration, voice, pacing, and pronunciation come from the original recordings. No new speech is synthesized in the final versions. The edited MP3s retain 24 kHz mono audio, encoded at 128 kb/s. Standard/easy-read captions omit the same obsolete sentences, and their word timestamps are aligned to the retained original speech.

Original MP3 files and unrelated mappings remain unchanged. Only these two table recordings and their standard/easy-read mappings are selected differently. The offline copies are synchronized. Matching controls, answer mappings, sign-language videos, feature settings, and shared runtime remain unchanged.

Validation: browser inspection of both two-column layouts and successful keyboard matching; audio duration and timestamp checks; original-speech alignment and sentence-pause checks; `git diff --check`.

## Added cover narration — 12 September 2026

Added narration for the separate front cover (`pg000_gp001_tx001`) and back cover (`pg097_gp001_tx001`) using the ADT Studio configured OpenAI credential. Used the documented `tts-1-hd`, `alloy`, speed `0.92` preset, MP3 output, and Whisper word alignment. Standard and easy-read entries share each cover's recording. Accessible text, audio mappings, word timings, offline data, and SCORM file entries are included. Existing narration and sign-video mappings are unchanged.

### Cover voice correction

At the user's correction, regenerated both cover recordings with `gpt-4o-mini-tts`, Alloy, default speed, and ADT Studio's `en-tz` speech instructions (Tanzanian English, calm conversational delivery, cheerful and positive tone). Updated only the cover audio selections and their Whisper word timings, plus offline and SCORM entries. Earlier cover MP3s are retained but no longer selected.
