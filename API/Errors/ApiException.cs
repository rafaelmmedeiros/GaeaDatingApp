namespace API.Errors
{
    public class ApiException
    {
        public ApiException(int statusCode, string message = null, string detais = null)
        {
            StatusCode = statusCode;
            Message = message;
            Detais = detais;
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Detais { get; set; }
    }
}