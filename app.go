package main

import (
	"go-web/libs"
	"go-web/routers"
	"html/template"

	"github.com/labstack/echo"
)

const (
	Port = ":10000"
)

func main() {
	app := echo.New()
	container := &libs.Container{
		Templates: template.Must(template.ParseGlob("templates/*.html")),
	}
	app.Renderer = container
	app.Static("/static", "public")
	app.GET("/", routers.Index)
	app.Logger.Fatal(app.Start(Port))
}
