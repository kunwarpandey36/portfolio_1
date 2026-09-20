// Multi-Track Cosmic Music Engine
// Tracks:
// 1. Marshmello x Pritam - BIBA (feat. Shirley Setia)
// 2. huken x murkish - WASTED (Nightcore Bootleg)
// 3. PIXY - LEGACY
// 4. Loki Season 2 - Purpose Is Glorious
// 5. The Neighbourhood - Reflections (Slowed + Reverb)
// 6. Travis Scott - HIGHEST IN THE ROOM
// 7. Taylor Swift - Wildest Dreams
// Supports seamless local playback with GitHub Raw URL fallback, auto-advance on track completion, and Next controls.

export interface Track {
  id: string;
  title: string;
  artist: string;
  sources: string[];
}

export const PLAYLIST: Track[] = [
    {
    id: 'reflections',
    title: 'Reflections (Slowed)',
    artist: 'The Neighbourhood',
    sources: [
      '/Reflections (Slowed Reverb).mp3',
      '/Reflections%20(Slowed%20Reverb).mp3',
      '/Reflections (best part loopedslowedreverb).mp3',
      '/Reflections%20(best%20part%20loopedslowedreverb).mp3',
      'https://raw.githubusercontent.com/kunwarpandey36/portfolio/main/public/Reflections%20(best%20part%20loopedslowedreverb).mp3',
    ],
  },
  
  {
    id: 'wasted',
    title: 'WASTED (Nightcore)',
    artist: 'huken x murkish',
    sources: [
      '/NIGHTCORE - WASTED.mp3',
      '/NIGHTCORE%20-%20WASTED.mp3',
      '/NIGHTCORE - huken x murkish - WASTED (Bootleg Edit) [Juice Wrld x Lil Uzi Vert] (Tik-Tok).mp3',
      '/NIGHTCORE%20-%20huken%20x%20murkish%20-%20WASTED%20(Bootleg%20Edit)%20%5BJuice%20Wrld%20x%20Lil%20Uzi%20Vert%5D%20(Tik-Tok).mp3',
      'https://raw.githubusercontent.com/kunwarpandey36/portfolio/main/public/NIGHTCORE%20-%20huken%20x%20murkish%20-%20WASTED%20(Bootleg%20Edit)%20%5BJuice%20Wrld%20x%20Lil%20Uzi%20Vert%5D%20(Tik-Tok).mp3',
    ],
  },
  {
    id: 'pixy',
    title: 'LEGACY',
    artist: 'PIXY',
    sources: [
      '/PIXY - LEGACY.m4a',
      '/PIXY%20-%20LEGACY.m4a',
      'https://raw.githubusercontent.com/kunwarpandey36/portfolio/main/public/PIXY%20-%20LEGACY.m4a',
    ],
  },
  {
    id: 'purpose',
    title: 'Purpose Is Glorious',
    artist: 'Loki Season 2',
    sources: [
      '/Purpose Is Glorious (Loki S2).mp3',
      '/Purpose%20Is%20Glorious%20(Loki%20S2).mp3',
      '/Purpose Is Glorious (From Loki_ Season 2 - Vol. 2 (Episodes 4-6)ScoreAudio Only).mp3',
      '/Purpose%20Is%20Glorious%20(From%20Loki_%20Season%202%20-%20Vol.%202%20(Episodes%204-6)ScoreAudio%20Only).mp3',
      'https://raw.githubusercontent.com/kunwarpandey36/portfolio/main/public/Purpose%20Is%20Glorious%20(From%20Loki_%20Season%202%20-%20Vol.%202%20(Episodes%204-6)ScoreAudio%20Only).mp3',
    ],
  },

  {
    id: 'travis',
    title: 'HIGHEST IN THE ROOM',
    artist: 'Travis Scott',
    sources: [
      '/Travis Scott - HIGHEST IN THE ROOM.mp3',
      '/Travis%20Scott%20-%20HIGHEST%20IN%20THE%20ROOM.mp3',
      '/song.mp3',
      'https://raw.githubusercontent.com/kunwarpandey36/portfolio/main/Travis%20Scott%20-%20HIGHEST%20IN%20THE%20ROOM.mp3',
    ],
  },
  {
    id: 'taylor',
    title: 'Wildest Dreams',
    artist: 'Taylor Swift',
    sources: [
      '/Taylor Swift-Wildest Dreams.mp3',
      '/Taylor%20Swift-Wildest%20Dreams.mp3',
      'https://raw.githubusercontent.com/kunwarpandey36/portfolio/main/public/Taylor%20Swift-Wildest%20Dreams.mp3',
    ],
  },
  {
    id: 'biba',
    title: 'BIBA (feat. Shirley Setia)',
    artist: 'Marshmello x Pritam',
    sources: [
      '/Marshmello x Pritam - BIBA.mp3',
      '/Marshmello%20x%20Pritam%20-%20BIBA.mp3',
      '/Marshmello x Pritam - BIBA feat. Shirley Setia (Official Lyric Video).mp3',
      '/Marshmello%20x%20Pritam%20-%20BIBA%20feat.%20Shirley%20Setia%20(Official%20Lyric%20Video).mp3',
      'https://raw.githubusercontent.com/kunwarpandey36/portfolio/main/public/Marshmello%20x%20Pritam%20-%20BIBA%20feat.%20Shirley%20Setia%20(Official%20Lyric%20Video).mp3',
    ],
  },
];

type Listener = (isPlaying: boolean, currentTrack: Track, currentIndex: number) => void;

export class InfinityMusicEngine {
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private hasAutoStarted: boolean = false;
  private currentIndex: number = 0;
  private currentSourceIndex: number = 0;
  private listeners: Set<Listener> = new Set();

  // Synth fallback if network or audio decoding fails completely
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private sequenceTimer: number | null = null;
  private step: number = 0;
  private isUsingSynthFallback: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudioElement();
    }
  }

  private notifyListeners(): void {
    const track = this.getCurrentTrack();
    this.listeners.forEach((listener) => listener(this.isPlaying, track, this.currentIndex));
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying, this.getCurrentTrack(), this.currentIndex);
    return () => this.listeners.delete(listener);
  }

  public getCurrentTrack(): Track {
    return PLAYLIST[this.currentIndex] || PLAYLIST[0];
  }

  public getCurrentIndex(): number {
    return this.currentIndex;
  }

  public getPlaylist(): Track[] {
    return PLAYLIST;
  }

  private initAudioElement(): void {
    try {
      this.audioElement = new Audio();
      this.audioElement.preload = 'auto';
      this.audioElement.volume = 0.75;
      this.loadCurrentTrackSources();

      this.audioElement.addEventListener('playing', () => {
        this.isPlaying = true;
        this.notifyListeners();
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      // Auto-play next track when current song finishes
      this.audioElement.addEventListener('ended', () => {
        this.next();
      });

      this.audioElement.addEventListener('error', (e) => {
        console.warn(`Audio error for track ${this.getCurrentTrack().title}:`, e);
        const currentTrack = this.getCurrentTrack();
        if (this.currentSourceIndex + 1 < currentTrack.sources.length) {
          this.currentSourceIndex++;
          if (this.audioElement) {
            this.audioElement.src = currentTrack.sources[this.currentSourceIndex];
            this.audioElement.load();
            this.audioElement.play().catch(() => {});
          }
        } else {
          // If all sources fail, advance to next track
          this.next();
        }
      });
    } catch (err) {
      console.warn('Could not initialize HTMLAudioElement:', err);
    }
  }

  private loadCurrentTrackSources(): void {
    if (!this.audioElement) return;
    const track = this.getCurrentTrack();
    this.currentSourceIndex = 0;
    this.audioElement.src = track.sources[0];
  }

  public initGlobalAutoTrigger(): void {
    if (this.hasAutoStarted && this.isPlaying) return;

    // 1. Immediate play attempt
    this.start();

    // 2. Gesture fallback for strict browser autoplay policies
    const triggerPlayback = () => {
      if (!this.isPlaying) {
        this.start();
      }
      this.hasAutoStarted = true;

      window.removeEventListener('click', triggerPlayback);
      window.removeEventListener('pointerdown', triggerPlayback);
      window.removeEventListener('touchstart', triggerPlayback);
      window.removeEventListener('keydown', triggerPlayback);
      window.removeEventListener('scroll', triggerPlayback);
      window.removeEventListener('wheel', triggerPlayback);
    };

    window.addEventListener('click', triggerPlayback, { passive: true, once: true });
    window.addEventListener('pointerdown', triggerPlayback, { passive: true, once: true });
    window.addEventListener('touchstart', triggerPlayback, { passive: true, once: true });
    window.addEventListener('keydown', triggerPlayback, { passive: true, once: true });
    window.addEventListener('scroll', triggerPlayback, { passive: true, once: true });
    window.addEventListener('wheel', triggerPlayback, { passive: true, once: true });
  }

  public start(): boolean {
    if (this.isPlaying) return true;

    if (!this.audioElement) {
      this.initAudioElement();
    }

    if (this.audioElement && !this.isUsingSynthFallback) {
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true;
            this.hasAutoStarted = true;
            this.notifyListeners();
          })
          .catch((err) => {
            console.log('Autoplay awaiting user gesture:', err?.message || err);
          });
      }
      return true;
    } else {
      return this.startSynthFallback();
    }
  }

  public stop(): void {
    if (this.audioElement && !this.isUsingSynthFallback) {
      this.audioElement.pause();
    }
    if (this.isUsingSynthFallback) {
      this.stopSynthFallback();
    }
    this.isPlaying = false;
    this.notifyListeners();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      return this.start();
    }
  }

  public next(): void {
    if (this.isUsingSynthFallback) {
      this.stopSynthFallback();
    }
    this.currentIndex = (this.currentIndex + 1) % PLAYLIST.length;
    this.loadCurrentTrackSources();
    if (this.audioElement) {
      this.audioElement.load();
      const p = this.audioElement.play();
      if (p !== undefined) {
        p.then(() => {
          this.isPlaying = true;
          this.notifyListeners();
        }).catch((err) => {
          console.warn('Playback error on next():', err);
        });
      }
    }
    this.isPlaying = true;
    this.notifyListeners();
  }

  public prev(): void {
    if (this.isUsingSynthFallback) {
      this.stopSynthFallback();
    }
    this.currentIndex = (this.currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    this.loadCurrentTrackSources();
    if (this.audioElement) {
      this.audioElement.load();
      const p = this.audioElement.play();
      if (p !== undefined) {
        p.then(() => {
          this.isPlaying = true;
          this.notifyListeners();
        }).catch((err) => {
          console.warn('Playback error on prev():', err);
        });
      }
    }
    this.isPlaying = true;
    this.notifyListeners();
  }

  public playTrack(index: number): void {
    if (index >= 0 && index < PLAYLIST.length) {
      if (this.isUsingSynthFallback) {
        this.stopSynthFallback();
      }
      this.currentIndex = index;
      this.loadCurrentTrackSources();
      if (this.audioElement) {
        this.audioElement.load();
        const p = this.audioElement.play();
        if (p !== undefined) {
          p.then(() => {
            this.isPlaying = true;
            this.notifyListeners();
          }).catch((err) => {
            console.warn('Playback error on playTrack():', err);
          });
        }
      }
      this.isPlaying = true;
      this.notifyListeners();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getTrackName(): string {
    const track = this.getCurrentTrack();
    return `${track.artist} - ${track.title}`;
  }

  private startSynthFallback(): boolean {
    try {
      this.isUsingSynthFallback = true;
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.step = 0;
      this.isPlaying = true;
      this.notifyListeners();

      const chords = [
        [146.83, 220.0, 277.18],
        [123.47, 185.0, 246.94],
        [98.0, 146.83, 220.0],
        [110.0, 164.81, 220.0],
      ];

      this.sequenceTimer = window.setInterval(() => {
        if (!this.ctx || !this.isPlaying || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const chord = chords[Math.floor((this.step % 32) / 8)];

        if (this.step % 4 === 0) {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(chord[0] / 2, now);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          osc.connect(gain);
          gain.connect(this.masterGain);
          osc.start(now);
          osc.stop(now + 0.38);
        }

        this.step++;
      }, 140);

      return true;
    } catch {
      return false;
    }
  }

  private stopSynthFallback(): void {
    if (this.sequenceTimer) {
      window.clearInterval(this.sequenceTimer);
      this.sequenceTimer = null;
    }
    if (this.ctx) {
      try {
        this.ctx.close();
      } catch {
        // ignore
      }
      this.ctx = null;
    }
    this.isUsingSynthFallback = false;
    this.notifyListeners();
  }
}

export const infinityMusic = new InfinityMusicEngine();
