import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

const ToastContext = createContext(null);

const titles = {
  success: 'Done',
  error: 'Something went wrong',
  warning: 'Heads up',
  info: 'Notice'
};

function iconFor(type) {
  switch (type) {
    case 'success':
      return '✓';
    case 'error':
      return '!';
    case 'warning':
      return '⚠';
    default:
      return 'i';
  }
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const dismissToast = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setToast(null);
  }, []);

  const showToast = useCallback(
    (message, type = 'info', title) => {
      if (!message) return;
      dismissToast();
      const id = Date.now();
      setToast({
        id,
        message,
        type,
        title: title ?? titles[type] ?? titles.info
      });
      timerRef.current = setTimeout(() => {
        setToast(null);
        timerRef.current = null;
      }, 4500);
    },
    [dismissToast]
  );

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
      <div className="ds-toast-root" aria-live="polite">
        {toast && (
          <div
            key={toast.id}
            className={`ds-toast ds-toast--${toast.type}`}
            role="alert"
          >
            <div className="ds-toast__icon" aria-hidden>
              {iconFor(toast.type)}
            </div>
            <div className="ds-toast__body">
              <div className="ds-toast__title">{toast.title}</div>
              <div className="ds-toast__msg">{toast.message}</div>
            </div>
            <button
              type="button"
              className="ds-toast__close"
              onClick={dismissToast}
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
}
