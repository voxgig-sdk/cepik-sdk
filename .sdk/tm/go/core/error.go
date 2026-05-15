package core

type CepikError struct {
	IsCepikError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCepikError(code string, msg string, ctx *Context) *CepikError {
	return &CepikError{
		IsCepikError: true,
		Sdk:              "Cepik",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CepikError) Error() string {
	return e.Msg
}
