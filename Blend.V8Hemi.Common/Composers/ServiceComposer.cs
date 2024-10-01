using Blend.V8Hemi.Common.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;

namespace Blend.V8Hemi.Common.Composers;
public class ServiceComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.Configure<Configuration.V8Hemi>(options =>
        {
            builder.Config.GetSection(nameof(Configuration.V8Hemi)).Bind(options);
        });
        builder.Services.AddScoped<IMotorNoiseService, MotorNoiseService>();
    }
}