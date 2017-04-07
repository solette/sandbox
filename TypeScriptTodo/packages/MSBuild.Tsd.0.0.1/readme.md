MSBuild.Tsd
============
> Run Tsd Node tools as a MSBuild task.

Inspired by [MSBuild.NodeTools by kmees](https://github.com/kmees/MSBuild.NodeTools)

Installation
------------

### NuGet

MSBuild.Tsd is available as a NuGet Package with the same name. 
This package contains all the available tools.

```
Install-Package MSBuild.Tsd
```

NuGet will automatically add the MSBuild targets to the `.csproj` file.

### Manually

Download the files in the `build/` folder and put them in your project folder.
Then open the `.csproj` file in an editor and do the following changes.

```xml
<Project ToolsVersion="14.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <!-- Put this at the top of the Project node -->
    <Import Project="..\path\to\MSBuild.Tsd.props" Condition="Exists('..\path\to\MSBuild.Tsd.props')" />
    <!-- Import *.props file for the tool(s) that you need -->

    <!--
      other stuff goes here...
    -->

    <!-- Put this at the bottom of the Project node -->
    <Import Project="..\path\to\MSBuild.Tsd.targets" Condition="Exists('..\path\to\MSBuild.Tsd.targets')" />
    <!-- Import *.targets file for the tool(s) that you need -->
</Project>
```

Note that the `MSBuild.Tsd.props` and `MSBuild.Tsd.targets` is required by
all the tools and must always be included.

Configuration
-------------

There are various configuration properties you can overwrite in the `.csproj` file 
**after** importing `MSBuild.*.props` but **before** importing `MSBuild.*.targets`.

### MSBuild.Tps

  * `TsdFile`: Path to tsd.json. Defaults to `$(MSBuildProjectDirectory)\tsd.json`.
  * `TsdWorkingDirectory`: Directory in which context the tsd task gets executed. Defaults to `$(MSBuildProjectDirectory)`.
  * `TsdCommand`: command to run tsd.
