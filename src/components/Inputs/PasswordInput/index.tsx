import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { InputIconContainer, InputStyled, InputStyledContainer } from "../styles"
import { useState } from "react"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

type PasswordInputProps = {
    password: string
    error: string
    setPassword: (value: string) => void
    placeholder?: string
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ error, setPassword, password, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div>
          <InputStyledContainer>
            <InputStyled
              style={{ width: '100%' }}
              placeholder={ placeholder ? placeholder : "Digite sua senha"}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputIconContainer onClick={() => setShowPassword(state => !state)}>
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </InputIconContainer>
          </InputStyledContainer>
          <p style={{ color: 'red' }}>{error}</p>
        </div>
    )
}