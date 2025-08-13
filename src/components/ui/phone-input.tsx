import { useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

interface PhoneInputProps {
  value: string;
  onChange: (value: string, isValid: boolean) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
}

const PhoneInput = ({ 
  value, 
  onChange, 
  className = "", 
  placeholder = "Enter phone number",
  required = false,
  id = "phone"
}: PhoneInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<any>(null);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (inputRef.current && !itiRef.current) {
      itiRef.current = intlTelInput(inputRef.current, {
        initialCountry: "ae",
        preferredCountries: ["ae", "in", "us", "gb", "om", "qa", "bh", "kw", "sa", "ss"],
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.0.0/build/js/utils.js",
        formatOnDisplay: true,
        nationalMode: false,
        autoPlaceholder: "aggressive",
        placeholderNumberType: "MOBILE",
        customPlaceholder: function(selectedCountryPlaceholder: string) {
          return selectedCountryPlaceholder;
        }
      });

      // Set initial value if provided
      if (value) {
        inputRef.current.value = value;
      }
    }

    return () => {
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (itiRef.current && value !== inputRef.current?.value) {
      if (inputRef.current) {
        inputRef.current.value = value;
      }
    }
  }, [value]);

  const handleInput = () => {
    if (itiRef.current && inputRef.current) {
      const phoneNumber = itiRef.current.getNumber();
      const valid = itiRef.current.isValidNumber();
      setIsValid(valid);
      onChange(phoneNumber, valid);
    }
  };

  const handleBlur = () => {
    if (itiRef.current && inputRef.current) {
      const phoneNumber = itiRef.current.getNumber();
      const valid = itiRef.current.isValidNumber();
      setIsValid(valid);
      onChange(phoneNumber, valid);
    }
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="tel"
        id={id}
        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          !isValid && value ? 'border-red-500' : ''
        } ${className}`}
        placeholder={placeholder}
        required={required}
        onInput={handleInput}
        onBlur={handleBlur}
      />
      {!isValid && value && (
        <p className="text-sm text-red-500 mt-1">Please enter a valid phone number</p>
      )}
    </div>
  );
};

export default PhoneInput;