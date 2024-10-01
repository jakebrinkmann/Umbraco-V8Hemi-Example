using System.Runtime.Serialization;

namespace Blend.V8Hemi.Common.Configuration;

[DataContract]
public class V8Hemi
{
    [DataMember(Name="MotorNoises")]
    public string[]? MotorNoises {get; set;}
}