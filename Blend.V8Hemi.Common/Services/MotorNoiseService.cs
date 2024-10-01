using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Web.Common;

namespace Blend.V8Hemi.Common.Services;

public class MotorNoiseService : IMotorNoiseService
{
    private readonly IOptions<Configuration.V8Hemi> _options;
    public MotorNoiseService(IOptions<Configuration.V8Hemi> options)
    {
        _options = options;
    }
    public async Task<string> GetMotorNoise()
    {
        var settings = _options.Value;
        
        Random random = new Random();
        if (settings.MotorNoises != null)
        {
            var index = random.Next(settings.MotorNoises.Length);


            if (settings.MotorNoises.IsNullOrEmpty())
            {
                return "";
            }
            else
            {
                return settings.MotorNoises[index];
            
            }
        }
        else
        {
            return "";
        }
    }
}