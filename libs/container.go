package libs

import (
	"html/template"
	"io"

	"github.com/labstack/echo"
)

type Container struct {
	Templates *template.Template
}

func (c *Container) Render(w io.Writer, name string, data interface{}, ctx echo.Context) error {
	return c.Templates.ExecuteTemplate(w, name, data)
}
