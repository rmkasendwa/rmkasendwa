'use client';

import { useEffect, useState } from 'react';

type ThemePreference = 'light' | 'system' | 'dark';
const themeCookieMaxAge = 60 * 60 * 24 * 365;

const themes: Array<{
  value: ThemePreference;
  label: string;
  icon: React.ReactNode;
}> = [
  {
    value: 'light',
    label: 'Use light theme',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="2.75" stroke="currentColor" />
        <path
          d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.23 3.23l1.06 1.06M11.71 11.71l1.06 1.06M12.77 3.23l-1.06 1.06M4.29 11.71l-1.06 1.06"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: 'system',
    label: 'Use system theme',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="2.5"
          width="12"
          height="8.5"
          rx="1.5"
          stroke="currentColor"
        />
        <path
          d="M5.5 13.5h5M8 11v2.5"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: 'dark',
    label: 'Use dark theme',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
        <path
          d="M13.25 10.15A5.75 5.75 0 0 1 5.85 2.75a5.75 5.75 0 1 0 7.4 7.4Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function applyTheme(preference: ThemePreference) {
  const resolved =
    preference === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : preference;

  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.style.colorScheme = resolved;
}

export function ThemeControl({
  initialPreference = 'system',
}: {
  initialPreference?: ThemePreference;
}) {
  const [preference, setPreference] =
    useState<ThemePreference>(initialPreference);

  useEffect(() => {
    const stored =
      document.documentElement.dataset.themePreference ??
      localStorage.getItem('theme');
    const initial =
      stored === 'light' || stored === 'dark' || stored === 'system'
        ? stored
        : initialPreference;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (document.documentElement.dataset.themePreference === 'system') {
        applyTheme('system');
      }
    };

    setPreference(initial);
    applyTheme(initial);
    media.addEventListener('change', handleSystemChange);

    return () => media.removeEventListener('change', handleSystemChange);
  }, []);

  const selectTheme = (theme: ThemePreference) => {
    setPreference(theme);
    localStorage.setItem('theme', theme);
    document.cookie = `theme=${theme}; Path=/; Max-Age=${themeCookieMaxAge}; SameSite=Lax`;
    applyTheme(theme);
  };

  return (
    <div className="theme-control" role="group" aria-label="Color theme">
      {themes.map((theme) => (
        <button
          key={theme.value}
          type="button"
          aria-label={theme.label}
          aria-pressed={preference === theme.value}
          title={theme.label}
          onClick={() => selectTheme(theme.value)}
        >
          {theme.icon}
        </button>
      ))}
    </div>
  );
}
