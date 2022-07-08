using ApiMyGame.Context;
using ApiMyGame.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace ApiMyGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrosController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public RegistrosController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetRegistros()
        {
            return  Ok
            (new
            {
                sucess = true,
                data = await _appDbContext.Registros.ToListAsync()
            });
        }

        [HttpPost]
        public async Task<IActionResult> CreateRegistro(Registro registro)
        {
            //Passando o registro
            _appDbContext.Registros.Add(registro);
            await _appDbContext.SaveChangesAsync();

            return Ok(new
            {
               success = true,
               data = registro
            });
        }
    }
}
