using Blend.V8Hemi.Backend.Controllers.Auth;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Blend.V8Hemi.Backend.Controllers.Swagger;

public class V8HemiConfigureSwaggerGenOptions : IConfigureOptions<SwaggerGenOptions>
{
    public void Configure(SwaggerGenOptions options)
    {
        options.SwaggerDoc("Blend.V8Hemi-api-v1", new OpenApiInfo{ Title = "Blend V8 Hemi API", Version = "v1" });
        options.OperationFilter<V8HemiBackOfficeSecurityRequirementsOperationFilter>();
    }
}