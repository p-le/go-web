package routers

import (
	"net/http"

	"github.com/labstack/echo"
)

func Index(ctx echo.Context) error {
	return ctx.Render(http.StatusOK, "index", "")
}
