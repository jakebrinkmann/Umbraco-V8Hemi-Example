using Blend.V8Hemi.Backend.Controllers.Swagger;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;

namespace Blend.V8Hemi.Backend.Composers;

public class ApiComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.ConfigureOptions<V8HemiConfigureSwaggerGenOptions>();
    }
}