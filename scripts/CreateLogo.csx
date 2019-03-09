#! "netcoreapp2.1"
#r "nuget:wk.SquareLogo"

using SquareLogo;

var settings = new LogoSettings
{
    NoSquare = true,
    FontFamily = "Fira Code",
    FontSize = 50,
    Padding = 30,
    Foreground = "White",
    Background = "Green"
};

var logo = new Logo();
logo.CreateLogo("> HTTPie", "images/icon.png", settings);