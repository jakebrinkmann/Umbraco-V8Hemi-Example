using Asp.Versioning;
using Blend.V8Hemi.Common.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Api.Common.Filters;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Cms.Core.Security;

namespace Blend.V8Hemi.Backend.Controllers;

[ApiController]
[ApiVersion("1.0")]
[MapToApi("Blend.V8Hemi-api-v1")]
[Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
[JsonOptionsName(Constants.JsonOptionsNames.BackOffice)]
[Route("api/v{version:apiVersion}/Blend.V8Hemi")]
public class MotorNoiseController : Controller
{
    private readonly IMotorNoiseService _noiseService;
    private readonly IBackOfficeSecurityAccessor _backOfficeSecurityAccessor;

    public MotorNoiseController(IMotorNoiseService noiseService, IBackOfficeSecurityAccessor backOfficeSecurityAccessor)
    {
        _noiseService = noiseService;
        _backOfficeSecurityAccessor = backOfficeSecurityAccessor;
    }

    [HttpGet("noise")]
    [MapToApiVersion("1.0")]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetNoise()
    {

        var noise = await _noiseService.GetMotorNoise();
        
        return Ok(noise);

    }
}