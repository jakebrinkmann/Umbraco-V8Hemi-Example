using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blend.V8Hemi.Common.Services;

public interface IMotorNoiseService
{
    Task<string> GetMotorNoise();
}